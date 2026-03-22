import type { Metadata } from "next";
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
        <p className="text-stone-700 leading-relaxed">
          Content coming soon.
        </p>
      </PageSection>
    </PageLayout>
  );
}
