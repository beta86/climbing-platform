import { createHash } from "node:crypto";
import { ZodError } from "zod";
import {
  leadRequestSchema,
  normalizeLeadRequest,
  type LeadErrorCode,
  type LeadErrorResponse,
  type LeadRequest,
  type LeadResponse,
  type LeadSuccessResponse,
} from "@/lib/leads/contract";
import { getLeadProvider } from "@/lib/leads/provider";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 10;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

export type LeadSubmissionContext = {
  ipAddress?: string;
  userAgent?: string;
  requestId?: string;
};

export async function submitLead(
  payload: unknown,
  context: LeadSubmissionContext = {}
): Promise<LeadResponse> {
  const requestId = context.requestId ?? crypto.randomUUID();
  const rateLimitKey = context.ipAddress?.trim() || "anonymous";

  if (!allowRequest(rateLimitKey)) {
    return createErrorResponse({
      id: requestId,
      code: "RATE_LIMITED",
      message: "Too many requests. Please try again later.",
    });
  }

  const parseResult = leadRequestSchema.safeParse(payload);
  if (!parseResult.success) {
    return createValidationErrorResponse(requestId, parseResult.error);
  }

  const leadRecord = normalizeLeadRequest(parseResult.data, {
    id: requestId,
    ipHash: hashIpAddress(context.ipAddress),
    userAgent: context.userAgent,
  });

  const providerResult = await getLeadProvider().submit(leadRecord);
  if (!providerResult.ok) {
    return createErrorResponse({
      id: requestId,
      code: providerResult.code,
      message: providerResult.message,
    });
  }

  const response: LeadSuccessResponse = {
    ok: true,
    id: requestId,
    message:
      parseResult.data.type === "newsletter"
        ? "Thanks for subscribing."
        : "Thanks for your message.",
  };

  return response;
}

function allowRequest(rateLimitKey: string): boolean {
  const now = Date.now();
  const current = rateLimitStore.get(rateLimitKey);

  if (!current || now >= current.resetAt) {
    rateLimitStore.set(rateLimitKey, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return true;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  current.count += 1;
  rateLimitStore.set(rateLimitKey, current);
  return true;
}

function createValidationErrorResponse(
  requestId: string,
  error: ZodError<LeadRequest>
): LeadErrorResponse {
  const fieldErrors = error.flatten().fieldErrors;
  const hasHoneypotError = Boolean(fieldErrors.hp?.length);
  const hasConsentError = Boolean(fieldErrors.consent?.length);

  let code: LeadErrorCode = "VALIDATION_ERROR";
  let message = "Invalid request payload.";

  if (hasHoneypotError) {
    code = "SPAM_DETECTED";
    message = "Spam check failed.";
  } else if (hasConsentError) {
    code = "CONSENT_REQUIRED";
    message = "Consent is required for newsletter signups.";
  }

  return createErrorResponse({
    id: requestId,
    code,
    message,
    fieldErrors,
  });
}

function createErrorResponse({
  id,
  code,
  message,
  fieldErrors,
}: {
  id: string;
  code: LeadErrorCode;
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
}): LeadErrorResponse {
  return {
    ok: false,
    id,
    error: {
      code,
      message,
      fieldErrors: compactFieldErrors(fieldErrors),
    },
  };
}

function compactFieldErrors(
  fieldErrors?: Record<string, string[] | undefined>
): Record<string, string[]> | undefined {
  if (!fieldErrors) {
    return undefined;
  }

  const entries = Object.entries(fieldErrors).filter(
    (entry): entry is [string, string[]] =>
      Array.isArray(entry[1]) && entry[1].length > 0
  );

  if (entries.length === 0) {
    return undefined;
  }

  return Object.fromEntries(entries);
}

function hashIpAddress(ipAddress?: string): string | undefined {
  const value = ipAddress?.trim();
  if (!value) {
    return undefined;
  }

  return createHash("sha256").update(value).digest("hex");
}
