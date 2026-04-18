import type { LeadRecord } from "@/lib/leads/contract";

export type LeadProviderResult =
  | { ok: true }
  | {
      ok: false;
      code: "PROVIDER_UNAVAILABLE";
      message: string;
    };

export interface LeadProvider {
  submit(lead: LeadRecord): Promise<LeadProviderResult>;
}

class NoopLeadProvider implements LeadProvider {
  async submit(_lead: LeadRecord): Promise<LeadProviderResult> {
    void _lead;
    return { ok: true };
  }
}

let provider: LeadProvider = new NoopLeadProvider();

export function getLeadProvider(): LeadProvider {
  return provider;
}

export function setLeadProvider(nextProvider: LeadProvider): void {
  provider = nextProvider;
}
