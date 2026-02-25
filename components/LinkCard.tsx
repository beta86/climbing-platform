import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  href: string;
  title: string;
  description?: string;
};

export default function LinkCard({
  href,
  title,
  description,
}: Props) {
  return (
    <Link
      href={href}
      className="group flex items-start justify-between gap-4 p-6 rounded-lg border border-stone-200 bg-white shadow-sm hover:shadow-md hover:border-orange-500/60 active:shadow-md active:border-orange-500/60 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-stone-50 focus:border-orange-500/60 transition-all duration-200"
    >
      <div className="min-w-0">
        <h2 className="text-xl font-semibold text-stone-900 mb-2">{title}</h2>
        {description && (
          <p className="text-stone-600 text-base leading-relaxed">
            {description}
          </p>
        )}
      </div>
      <ChevronRight
        className="mt-1 shrink-0 text-stone-400 group-hover:text-orange-500 group-active:text-orange-500 group-focus:text-orange-500 transition-colors duration-200"
        size={20}
        aria-hidden
      />
    </Link>
  );
}
