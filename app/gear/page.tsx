import type { Metadata } from "next";
import BackNavLink from "@/components/BackNavLink";
import LeadCaptureCallout from "@/components/leads/LeadCaptureCallout";
import LinkCard from "@/components/LinkCard";
import PageLayout from "@/components/PageLayout";
import PageSection from "@/components/PageSection";
import { disciplineLabel, gearPageOrder, kits } from "@/data/kits";

export const metadata: Metadata = {
  title: "Climbing Gear",
  description:
    "Beginner climbing gear checklists for indoor, sport, and trad disciplines, with practical kit guidance for getting started.",
  alternates: {
    canonical: "/gear",
  },
  openGraph: {
    title: "Climbing Gear",
    description:
      "Beginner climbing gear checklists for indoor, sport, and trad disciplines, with practical kit guidance for getting started.",
    url: "/gear",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Climbing Gear",
    description:
      "Beginner climbing gear checklists for indoor, sport, and trad disciplines, with practical kit guidance for getting started.",
  },
};

const disciplines = gearPageOrder.filter(
  (d): d is keyof typeof kits => d in kits
);

export default function GearPage() {
  return (
    <PageLayout title="Climbing gear">
      <PageSection bg="white">
        <p className="text-stone-700 leading-relaxed mb-8">
          Use these starter kit lists to build your gear progressively from
          indoor climbing through outdoor sport and trad.
        </p>
        <ul className="flex flex-col gap-4">
          {disciplines.map((type) => (
            <li key={type}>
              <LinkCard
                href={`/gear/${type}`}
                title={`${disciplineLabel[type]} beginner kit`}
              />
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <LeadCaptureCallout
            title="Get gear updates"
            description="Join updates for new gear lists, beginner progression pathways, and future recommendations."
          />
        </div>
        <BackNavLink href="/">Back to Home</BackNavLink>
      </PageSection>
    </PageLayout>
  );
}
