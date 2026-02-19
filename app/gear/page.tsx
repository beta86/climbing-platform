import LinkCard from "@/components/LinkCard";
import { disciplineLabel, gearPageOrder, kits } from "@/data/kits";

const disciplines = gearPageOrder.filter(
  (d): d is keyof typeof kits => d in kits
);

export default function GearPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-stone-100">Climbing gear</h1>
        <p className="mt-2 text-stone-400">
          Here you can find a list of gear that you ideally want to start each
          discipline.
        </p>
      </header>

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
    </div>
  );
}
