import type { Metadata } from "next";
import NewsletterSignupForm from "@/components/leads/NewsletterSignupForm";
import PageLayout from "@/components/PageLayout";
import PageSection from "@/components/PageSection";

export const metadata: Metadata = {
  title: "Join Updates",
  description:
    "Join the Ground Up mailing list for new climbing guides and progression updates.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewsletterPage() {
  return (
    <PageLayout title="Join Updates">
      <PageSection bg="white">
        <div className="space-y-8">
          <div className="space-y-4 text-stone-700 leading-relaxed">
            <p>
              Get updates when new guides are published and when new progression
              pathways are added.
            </p>
            <p>No spam. Unsubscribe anytime.</p>
          </div>
          <NewsletterSignupForm source="join-page" />
        </div>
      </PageSection>
    </PageLayout>
  );
}
