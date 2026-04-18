import type { Metadata } from "next";
import Link from "next/link";
import ContactLeadForm from "@/components/leads/ContactLeadForm";
import PageLayout from "@/components/PageLayout";
import PageSection from "@/components/PageSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ground Up about climbing guides, progression content, and future updates.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactPage() {
  return (
    <PageLayout title="Contact">
      <PageSection bg="white">
        <div className="space-y-8">
          <div className="space-y-4 text-stone-700 leading-relaxed">
            <p>
              Have a question about a guide, progression planning, or future
              coaching updates? Send a message below.
            </p>
            <p>
              If you only want updates, use the{" "}
              <Link
                href="/newsletter"
                className="text-orange-600 font-medium hover:text-orange-500 transition-colors duration-150"
              >
                mailing list signup
              </Link>{" "}
              instead.
            </p>
          </div>
          <ContactLeadForm />
        </div>
      </PageSection>
    </PageLayout>
  );
}
