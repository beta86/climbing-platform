"use client";

import { FormEvent, useMemo, useState } from "react";
import type { LeadResponse } from "@/lib/leads/contract";

type Props = {
  source?: "join-page" | "hero-cta" | "guide-footer" | "unknown";
};

type FieldErrors = Record<string, string[]>;

export default function NewsletterSignupForm({ source = "join-page" }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const consentCopy = useMemo(
    () =>
      "I agree to receive email updates from Ground Up and understand I can unsubscribe anytime.",
    []
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setServerMessage(null);
    setIsSuccess(false);
    setFieldErrors({});

    const payload = {
      type: "newsletter" as const,
      source,
      email,
      name: name || undefined,
      consent,
      hp,
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as LeadResponse;
      if (!response.ok || !data.ok) {
        setServerMessage(
          data.ok ? "Something went wrong. Please try again." : data.error.message
        );
        setFieldErrors(data.ok ? {} : data.error.fieldErrors ?? {});
        return;
      }

      setIsSuccess(true);
      setServerMessage(data.message);
      setEmail("");
      setName("");
      setConsent(false);
      setHp("");
    } catch {
      setServerMessage("Could not submit right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="newsletter-name" className="block text-sm font-medium text-stone-700">
          First name (optional)
        </label>
        <input
          id="newsletter-name"
          name="name"
          type="text"
          autoComplete="given-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
        />
        {fieldErrors.name && (
          <p className="mt-1 text-sm text-red-700">{fieldErrors.name[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="newsletter-email" className="block text-sm font-medium text-stone-700">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
        />
        {fieldErrors.email && (
          <p className="mt-1 text-sm text-red-700">{fieldErrors.email[0]}</p>
        )}
      </div>

      <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
        <label className="flex gap-3 text-sm text-stone-700">
          <input
            name="consent"
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-stone-300 text-orange-600 focus:ring-orange-500"
          />
          <span>{consentCopy}</span>
        </label>
        {fieldErrors.consent && (
          <p className="mt-2 text-sm text-red-700">{fieldErrors.consent[0]}</p>
        )}
      </div>

      <div className="hidden" aria-hidden>
        <label htmlFor="newsletter-hp">Leave this field empty</label>
        <input
          id="newsletter-hp"
          name="hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={hp}
          onChange={(event) => setHp(event.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex rounded-xl bg-green-700 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Join Updates"}
      </button>

      {serverMessage && (
        <p
          className={`text-sm ${isSuccess ? "text-green-700" : "text-red-700"}`}
          role="status"
          aria-live="polite"
        >
          {serverMessage}
        </p>
      )}
    </form>
  );
}
