import Link from "next/link";
import BackLink from "@/components/BackLink";

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
      <div className="absolute inset-0 bg-white/35" aria-hidden />

      <div className="relative z-10">
        {/* Title band */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <div className="inline-block max-w-2xl rounded-xl bg-white/18 backdrop-blur-sm border border-white/25 shadow-sm px-5 py-4">
              <h1 className="text-4xl font-bold text-stone-900">
                Indoor Foundations
              </h1>
              <div
                className="mt-2 h-1 w-16 rounded-full bg-orange-500"
                aria-hidden
              />
              <p className="mt-6 text-stone-900 leading-relaxed text-lg">
                A structured path through the core skills of gym climbing — from
                your first session to confident movement and safe belaying.
              </p>
            </div>
          </div>
        </section>

      {/* Guide list — frosted container */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="bg-white/18 backdrop-blur-sm rounded-xl border border-white/25 shadow-sm px-6">
            <h2 className="text-sm font-medium uppercase tracking-wider text-stone-500 pt-6 pb-4">
              Guides in order
            </h2>
            <ol className="space-y-0">
              {guides.map((guide, index) => (
                <li key={guide.href}>
                  <Link
                    href={guide.href}
                    className="group flex items-start gap-6 py-6 hover:bg-stone-100/80 -mx-2 px-2 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    <span className="text-3xl font-bold text-stone-200 group-hover:text-orange-200 transition-colors duration-150 w-10 shrink-0 leading-none pt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-lg font-semibold text-stone-900 group-hover:text-orange-600 transition-colors duration-150">
                          {guide.title}
                        </h3>
                        {guide.tag && (
                          <span className="text-xs font-medium text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full">
                            {guide.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-stone-500 text-sm leading-relaxed">
                        {guide.description}
                      </p>
                    </div>
                    <span className="text-stone-300 group-hover:text-orange-500 transition-colors duration-150 shrink-0 pt-1 text-lg">
                      →
                    </span>
                  </Link>
                  {index < guides.length - 1 && (
                    <div className="h-px bg-stone-200" aria-hidden />
                  )}
                </li>
              ))}
            </ol>
            <div className="pt-4 pb-6">
              <BackLink />
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
