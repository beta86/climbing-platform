import Link from "next/link";
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

      <ul className="flex flex-col gap-3">
        {disciplines.map((type) => (
          <li key={type}>
            <Link
              href={`/gear/${type}`}
              className="block p-4 rounded-lg border border-stone-700 bg-stone-800/80 shadow-sm hover:shadow hover:border-stone-600 transition-all text-stone-100 font-medium"
            >
              {disciplineLabel[type]} beginner kit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
