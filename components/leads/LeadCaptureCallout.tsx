import Link from "next/link";

type LeadCaptureCalloutProps = {
  title?: string;
  description?: string;
};

export default function LeadCaptureCallout({
  title = "Get guide updates",
  description = "Join the mailing list for new guides, progression pathways, and future coaching updates.",
}: LeadCaptureCalloutProps) {
  return (
    <section className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-6 sm:px-6">
      <h2 className="text-xl font-semibold text-stone-900">{title}</h2>
      <p className="mt-2 text-stone-700 leading-relaxed">{description}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/newsletter"
          className="inline-flex rounded-xl bg-green-700 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-green-600"
        >
          Join Updates
        </Link>
        <Link
          href="/contact"
          className="inline-flex rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-700 transition-colors duration-150 hover:bg-stone-100"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
