import type { Metadata } from "next";
import Link from "next/link";
import BackNavLink from "@/components/BackNavLink";
import FrostedPanel from "@/components/FrostedPanel";

export const metadata: Metadata = {
  title: "Indoor Climbing Guides",
  description:
    "Start your indoor climbing progression with practical guides on movement, belay systems, safety habits, and confidence-building foundations.",
  alternates: {
    canonical: "/guides/indoor",
  },
  openGraph: {
    title: "Indoor Climbing Guides",
    description:
      "Structured indoor climbing guides focused on systems, safety, movement, and deliberate progression.",
    url: "/guides/indoor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indoor Climbing Guides",
    description:
      "Structured indoor climbing guides focused on systems, safety, movement, and deliberate progression.",
  },
};

const guides = [
  {
    href: "/guides/indoor/introduction",
    title: "Introduction to Indoor Climbing",
    description:
      "An overview of the gym environment, basic movement principles, and what to expect in your first sessions.",
    tag: "Start here",
  },
  // Add more guides below as you write them:
  // { href: "/guides/indoor/...", title: "...", description: "..." },
];

export default function GuidesIndoorPage() {
  return (
    <div
      className="relative min-h-screen bg-stone-100"
      style={{
        backgroundImage: "url(/images/topo-bg-2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="absolute inset-0 bg-white/35" aria-hidden /> */}

      <div className="relative z-10">
        {/* Title band */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <FrostedPanel>
              <div className="py-4">
                <h1 className="text-4xl font-bold text-stone-900">
                  Indoor Foundations
                </h1>
                <div
                  className="mt-2 h-1 w-16 rounded-full bg-orange-500"
                  aria-hidden
                />
                <p className="mt-6 text-stone-900 leading-relaxed text-lg">
                  A structured path through the core skills of gym climbing —
                  from your first session to confident movement and safe
                  belaying.
                </p>
              </div>
            </FrostedPanel>
          </div>
        </section>

      {/* Guide list — frosted container */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <FrostedPanel>
            <ol className="space-y-0 pt-6">
              {guides.map((guide) => (
                <li key={guide.href}>
                  <Link
                    href={guide.href}
                    className="group flex items-start gap-6 py-6 hover:bg-stone-100/80 -mx-2 px-2 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="mb-1">
                        {guide.tag && (
                          <span className="inline-block mb-2 text-xs font-medium text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full">
                            {guide.tag}
                          </span>
                        )}
                        <h3 className="text-lg font-semibold text-stone-900 group-hover:text-orange-600 transition-colors duration-150">
                          {guide.title}
                        </h3>
                      </div>
                      <p className="text-stone-500 group-hover:text-stone-600 text-sm leading-relaxed transition-colors duration-150">
                        {guide.description}
                      </p>
                    </div>
                  </Link>
                  {guide !== guides[guides.length - 1] && (
                    <div className="h-px bg-stone-200" aria-hidden />
                  )}
                </li>
              ))}
            </ol>
            <div className="pt-4 pb-6">
              <BackNavLink href="/guides">Back to Guides</BackNavLink>
            </div>
          </FrostedPanel>
        </div>
      </section>
      </div>
    </div>
  );
}
