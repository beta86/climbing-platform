import { z } from "zod";

export const LEAD_TYPES = ["newsletter", "contact"] as const;
export const LEAD_SOURCES = [
  "join-page",
  "contact-page",
  "hero-cta",
  "guide-footer",
  "unknown",
] as const;

const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;
const MIN_CONTACT_MESSAGE_LENGTH = 10;

export const leadRequestSchema = z
  .object({
    type: z.enum(LEAD_TYPES),
    source: z.enum(LEAD_SOURCES),
    email: z.email().transform((value) => value.trim().toLowerCase()),
    name: z
      .string()
      .trim()
      .min(1, "Name cannot be empty")
      .max(MAX_NAME_LENGTH, `Name must be <= ${MAX_NAME_LENGTH} characters`)
      .optional(),
    consent: z.boolean().optional(),
    message: z
      .string()
      .trim()
      .min(
        MIN_CONTACT_MESSAGE_LENGTH,
        `Message must be at least ${MIN_CONTACT_MESSAGE_LENGTH} characters`
      )
      .max(
        MAX_MESSAGE_LENGTH,
        `Message must be <= ${MAX_MESSAGE_LENGTH} characters`
      )
      .optional(),
    hp: z.string().optional(),
  })
  .superRefine((value, ctx) => {
    if (value.type === "newsletter" && value.consent !== true) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["consent"],
        message: "Consent is required for newsletter signups",
      });
    }

    if (value.type === "contact" && !value.message) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["message"],
        message: "Message is required for contact submissions",
      });
    }

    if (value.hp && value.hp.trim().length > 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["hp"],
        message: "Spam check failed",
      });
    }
  });

export type LeadType = (typeof LEAD_TYPES)[number];
export type LeadSource = (typeof LEAD_SOURCES)[number];
export type LeadRequest = z.infer<typeof leadRequestSchema>;

export type LeadErrorCode =
  | "VALIDATION_ERROR"
  | "CONSENT_REQUIRED"
  | "RATE_LIMITED"
  | "SPAM_DETECTED"
  | "PROVIDER_UNAVAILABLE"
  | "UNKNOWN_ERROR";

export type LeadSuccessResponse = {
  ok: true;
  id: string;
  message: string;
};

export type LeadErrorResponse = {
  ok: false;
  id: string;
  error: {
    code: LeadErrorCode;
    message: string;
    fieldErrors?: Record<string, string[]>;
  };
};

export type LeadResponse = LeadSuccessResponse | LeadErrorResponse;

export type LeadRecord = {
  id: string;
  type: LeadType;
  source: LeadSource;
  email: string;
  name?: string;
  message?: string;
  consentGiven: boolean;
  consentAt?: string;
  createdAt: string;
  ipHash?: string;
  userAgent?: string;
};

export type NormalizeLeadOptions = {
  id?: string;
  now?: Date;
  ipHash?: string;
  userAgent?: string;
};

export function normalizeLeadRequest(
  input: LeadRequest,
  options: NormalizeLeadOptions = {}
): LeadRecord {
  const now = options.now ?? new Date();
  const id = options.id ?? createLeadId();
  const isNewsletter = input.type === "newsletter";
  const consentGiven = input.consent === true;

  return {
    id,
    type: input.type,
    source: input.source,
    email: input.email.trim().toLowerCase(),
    name: input.name?.trim() || undefined,
    message: input.message?.trim() || undefined,
    consentGiven,
    consentAt: isNewsletter && consentGiven ? now.toISOString() : undefined,
    createdAt: now.toISOString(),
    ipHash: options.ipHash,
    userAgent: options.userAgent,
  };
}

function createLeadId(): string {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}
