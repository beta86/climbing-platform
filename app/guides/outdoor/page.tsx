import BackLink from "@/components/BackLink";
import PageLayout from "@/components/PageLayout";
import PageSection from "@/components/PageSection";

export default function GuidesOutdoorPage() {
  return (
    <PageLayout title="Outdoor sport">
      <PageSection bg="white">
        <p className="text-stone-700 leading-relaxed">
          Content coming soon. Anchors, safety systems, route reading, and
          decision making.
        </p>
        <BackLink />
      </PageSection>
    </PageLayout>
  );
}
