import Link from "next/link";
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
        <Link
          href="/guides"
          className="inline-block mt-6 text-base text-stone-600 hover:text-orange-600 transition-colors duration-150"
        >
          Back to Guides
        </Link>
      </PageSection>
    </PageLayout>
  );
}
