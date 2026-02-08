import { kits, disciplineLabel } from "@/data/kits";

type Discipline = keyof typeof kits;

type Props = {
  type: Discipline;
  /** When false, only the list is rendered (e.g. when page already has a heading). Default true. */
  showHeading?: boolean;
};

export default function KitList({ type, showHeading = true }: Props) {
  const items = kits[type].beginner;
  const title = `${disciplineLabel[type]} beginner kit`;

  return (
    <section className="space-y-4">
      {showHeading && (
        <h2 className="text-xl font-semibold text-stone-200 border-b border-stone-700 pb-2">
          {title}
        </h2>
      )}
      <ul className="flex flex-col gap-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="p-4 rounded-lg border border-stone-700 bg-stone-800/80 shadow-sm hover:shadow transition-shadow"
          >
            <h3 className="font-semibold text-stone-100">{item.name}</h3>
            <p className="text-stone-400 text-sm mt-1">{item.note}</p>
            <p className="text-stone-500 text-sm mt-1">{item.estPrice}</p>
            <a
              href={item.affiliate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-orange-400 font-medium text-sm hover:underline"
            >
              Buy here
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
