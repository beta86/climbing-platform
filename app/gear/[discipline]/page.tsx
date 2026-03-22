import { notFound } from "next/navigation";
import BackNavLink from "@/components/BackNavLink";
import KitList from "@/components/KitList";
import PageLayout from "@/components/PageLayout";
import PageSection from "@/components/PageSection";
import { disciplineLabel, kits } from "@/data/kits";

type Discipline = keyof typeof kits;

function isValidDiscipline(s: string): s is Discipline {
  return s in kits;
}

type Props = {
  params: Promise<{ discipline: string }>;
};

export default async function GearDisciplinePage({ params }: Props) {
  const { discipline } = await params;

  if (!isValidDiscipline(discipline)) {
    notFound();
  }

  const title = `${disciplineLabel[discipline]} beginner kit`;

  return (
    <PageLayout title={title}>
      <PageSection bg="white">
        <KitList type={discipline} showHeading={false} />
        <BackNavLink href="/gear">Back to Climbing Gear</BackNavLink>
      </PageSection>
    </PageLayout>
  );
}
