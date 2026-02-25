import LinkCard from "@/components/LinkCard";
import { TrendingUp } from "lucide-react";

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-stone-100">
      {/* Hero: image with title overlaid */}
      <section className="relative h-[40vh] min-h-[280px] max-h-[420px] w-full overflow-hidden">
        <img
          src="/images/guides-hero-2.jpg"
          alt="Climbing skills and progression"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-stone-900/40" aria-hidden />
        <div className="absolute left-0 right-0 top-0 flex flex-col items-start pt-12 sm:pt-16">
          <div className="max-w-3xl w-full mx-auto px-5 sm:px-6">
            <h1 className="text-4xl font-bold text-stone-200 drop-shadow-sm">
              Build Your Skills
            </h1>
            <div
              className="mt-2 h-1 w-16 rounded-full bg-orange-500"
              aria-hidden
            />
          </div>
        </div>
      </section>

      {/* Section 2: Intro — white band */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="border-l-4 border-l-green-600/70 pl-6 sm:pl-7">
            <div className="space-y-4 text-stone-700 leading-relaxed text-lg">
              <p>
                This is a structured collection of practical climbing skills —
                built to support your progression from indoor foundations to
                outdoor sport and trad.
              </p>
              <p>
                Each guide focuses on systems, judgement, and movement — not just
                grades.
              </p>
              <p>
                Whether you're learning to belay confidently, building anchor
                knowledge, or developing gear placement skills, this library is
                designed to help you progress deliberately and safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Pathways — stone-50 band */}
      <section className="bg-stone-50 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <h2 className="text-sm font-medium uppercase tracking-wider text-stone-500 mb-6">
            Choose a pathway
          </h2>
          <div className="flex flex-col gap-6">
            <LinkCard
              href="/guides/indoor"
              title="Indoor foundations"
              description="Movement skills, belay systems, and confidence building. The base for everything that follows."
              variant="light"
            />
            <LinkCard
              href="/guides/outdoor"
              title="Outdoor sport"
              description="Anchors, safety systems, route reading, and decision making. From first outdoor day to leading confidently."
              variant="light"
            />
            <LinkCard
              href="/guides/trad"
              title="Trad climbing"
              description="Gear placement, systems thinking, and judgement under pressure. Building toward trad when you're ready."
              variant="light"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
