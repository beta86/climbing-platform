import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  href: string;
  title: string;
  description?: string;
  /** Use "light" on light-themed pages (e.g. Guides); default is dark. */
  variant?: "dark" | "light";
};

export default function LinkCard({
  href,
  title,
  description,
  variant = "dark",
}: Props) {
  const isLight = variant === "light";

  return (
    <Link
      href={href}
      className={
        isLight
          ? "group flex items-start justify-between gap-4 p-6 rounded-lg border border-stone-200 bg-white shadow-sm hover:shadow-md hover:border-orange-500/60 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-stone-50 transition-all duration-200"
          : "group flex items-start justify-between gap-4 p-6 rounded-lg border border-stone-700 bg-stone-800/80 shadow-sm hover:shadow-md hover:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-stone-950 transition-all duration-200"
      }
    >
      <div className="min-w-0">
        <h2
          className={
            isLight
              ? "text-xl font-semibold text-stone-900 mb-2"
              : "text-xl font-semibold text-stone-100 mb-2"
          }
        >
          {title}
        </h2>
        {description && (
          <p
            className={
              isLight
                ? "text-stone-600 text-base leading-relaxed"
                : "text-stone-400 text-base leading-relaxed"
            }
          >
            {description}
          </p>
        )}
      </div>
      <ChevronRight
        className={
          isLight
            ? "mt-1 shrink-0 text-stone-400 group-hover:text-orange-500 transition-colors duration-200"
            : "mt-1 shrink-0 text-stone-500 group-hover:text-orange-500 transition-colors duration-200"
        }
        size={20}
        aria-hidden
      />
    </Link>
  );
}
