import type { Metadata } from "next";
import LinkCard from "@/components/LinkCard";
import PageLayout from "@/components/PageLayout";
import PageSection from "@/components/PageSection";
import { disciplineLabel, gearPageOrder, kits } from "@/data/kits";

export const metadata: Metadata = {
  title: "Climbing Gear",
  description:
    "Beginner climbing gear checklists for indoor, sport, and trad disciplines, with practical kit guidance for getting started.",
};

const disciplines = gearPageOrder.filter(
  (d): d is keyof typeof kits => d in kits
);

export default function GearPage() {
  return (
    <PageLayout title="Climbing gear">
      <PageSection bg="white">
        <p className="text-stone-700 leading-relaxed mb-8">
          Here you can find a list of gear that you ideally want to start each
          discipline.
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
      </PageSection>
    </PageLayout>
  );
}
