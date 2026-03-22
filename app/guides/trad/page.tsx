import BackNavLink from "@/components/BackNavLink";
import PageLayout from "@/components/PageLayout";
import PageSection from "@/components/PageSection";

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
