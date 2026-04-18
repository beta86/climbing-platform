"use client";

import { FormEvent, useState } from "react";
import type { LeadResponse } from "@/lib/leads/contract";

type FieldErrors = Record<string, string[]>;

export default function ContactLeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setServerMessage(null);
    setIsSuccess(false);
    setFieldErrors({});

    const payload = {
      type: "contact" as const,
      source: "contact-page" as const,
      email,
      name: name || undefined,
      message,
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
      setName("");
      setEmail("");
      setMessage("");
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
        <label htmlFor="contact-name" className="block text-sm font-medium text-stone-700">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
        />
        {fieldErrors.name && (
          <p className="mt-1 text-sm text-red-700">{fieldErrors.name[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-stone-700">
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
        />
        {fieldErrors.email && (
          <p className="mt-1 text-sm text-red-700">{fieldErrors.email[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-stone-700">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
        />
        {fieldErrors.message && (
          <p className="mt-1 text-sm text-red-700">{fieldErrors.message[0]}</p>
        )}
      </div>

      <div className="hidden" aria-hidden>
        <label htmlFor="contact-hp">Leave this field empty</label>
        <input
          id="contact-hp"
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
        className="inline-flex rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send message"}
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
