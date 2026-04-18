import { NextResponse } from "next/server";
import type { LeadResponse } from "@/lib/leads/contract";
import { submitLead } from "@/lib/leads/service";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        id: crypto.randomUUID(),
        error: {
          code: "VALIDATION_ERROR",
          message: "Request body must be valid JSON.",
        },
      } satisfies LeadResponse,
      { status: 400 }
    );
  }

  const response = await submitLead(payload, {
    ipAddress: getIpAddress(request),
    userAgent: request.headers.get("user-agent") ?? undefined,
  });

  return NextResponse.json(response, { status: statusFromResponse(response) });
}

function statusFromResponse(response: LeadResponse): number {
  if (response.ok) {
    return 200;
  }

  switch (response.error.code) {
    case "RATE_LIMITED":
      return 429;
    case "PROVIDER_UNAVAILABLE":
      return 503;
    case "SPAM_DETECTED":
    case "CONSENT_REQUIRED":
    case "VALIDATION_ERROR":
      return 400;
    case "UNKNOWN_ERROR":
      return 500;
    default:
      return 500;
  }
}

function getIpAddress(request: Request): string | undefined {
  const xForwardedFor = request.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    return xForwardedFor.split(",")[0]?.trim();
  }

  const xRealIp = request.headers.get("x-real-ip");
  if (xRealIp) {
    return xRealIp.trim();
  }

  return undefined;
}
