import Link from "next/link";

type Props = {
  href: string;
  title: string;
  description?: string;
};

export default function LinkCard({ href, title, description }: Props) {
  return (
    <Link
      href={href}
      className="block p-6 rounded-lg border border-stone-700 bg-stone-800/80 shadow-sm hover:shadow hover:border-stone-600 transition-all"
    >
      <h2 className="text-xl font-semibold text-stone-100 mb-2">{title}</h2>
      {description && <p className="text-stone-400">{description}</p>}
    </Link>
  );
}
