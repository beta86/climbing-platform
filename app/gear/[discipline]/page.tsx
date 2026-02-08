import Link from "next/link";
import { notFound } from "next/navigation";
import KitList from "@/components/KitList";
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
    <div className="max-w-2xl mx-auto px-4 py-10">
      
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-stone-100">{title}</h1>
      </header>
      <KitList type={discipline} showHeading={false} />
      <Link
        href="/gear"
        className="inline-block text-sm text-stone-400 hover:text-stone-200 mt-6"
      >
        ← Back to gear page
      </Link>
    </div>
  );
}
