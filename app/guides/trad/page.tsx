import type { Metadata } from "next";
import BackNavLink from "@/components/BackNavLink";
import PageLayout from "@/components/PageLayout";
import PageSection from "@/components/PageSection";

export const metadata: Metadata = {
  title: "Trad Climbing Guides",
  description:
    "Trad climbing progression guides covering gear placement, systems thinking, and judgement under pressure.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GuidesTradPage() {
  return (
    <PageLayout title="Trad climbing">
      <PageSection bg="white">
        <p className="text-stone-700 leading-relaxed">
          Content coming soon. Gear placement, systems thinking, and judgement
          under pressure.
        </p>
        <BackNavLink href="/guides">Back to Guides</BackNavLink>
      </PageSection>
    </PageLayout>
  );
}
