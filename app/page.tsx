import type { Metadata } from "next";
import Link from "next/link";
import LeadCaptureCallout from "@/components/leads/LeadCaptureCallout";

export const metadata: Metadata = {
  title: "Build Your Climbing from the Ground Up",
  description:
    "Structured climbing guides and practical gear pathways for indoor, sport, and trad climbers. Build skills, systems, and judgement step by step.",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[65vh] min-h-[420px] max-h-[700px] overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Outdoor sport climber on a steep route"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-linear-to-b from-stone-950/25 via-stone-950/20 to-stone-950/55" aria-hidden />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end px-4 pb-8 sm:px-6 sm:pb-10">
          <div className="mx-auto w-full max-w-6xl text-center">
            <div className="mb-10 sm:mb-12 md:mb-14">
              <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
                Build Your Climbing from the Ground Up
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-stone-100 leading-relaxed">
                Structured progression for indoors, sport and trad climbers -
                built step by step
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/guides"
                className="inline-flex bg-orange-600 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-orange-500 transition"
              >
                Start Your Progression
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-stone-900 mb-6">
            Progression Over Guesswork
          </h2>

          <p className="text-lg text-stone-700 leading-relaxed">
            Climbing isn’t about chasing grades. It’s about building movement,
            judgement, and confidence over time — indoors and outside.
            Ground Up focuses on structured development so you can progress
            with intention.
          </p>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-stone-900 mb-4">
              Build Your Skills
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto">
              Start with indoor foundations, then progress to outdoor sport and
              trad. These guides are built to develop movement, systems, and
              judgement step by step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <Link
              href="/guides/indoor"
              className="block rounded-lg p-4 hover:bg-stone-50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-stone-900 mb-4">
                Indoor Foundations
              </h3>
              <p className="text-stone-600">
                Movement skills, belay systems, and confidence building.
              </p>
            </Link>

            <Link
              href="/guides/outdoor"
              className="block rounded-lg p-4 hover:bg-stone-50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-stone-900 mb-4">
                Outdoor Sport
              </h3>
              <p className="text-stone-600">
                Anchors, safety systems, route reading, and decision making.
              </p>
            </Link>

            <Link
              href="/guides/trad"
              className="block rounded-lg p-4 hover:bg-stone-50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-stone-900 mb-4">
                Trad Climbing
              </h3>
              <p className="text-stone-600">
                Gear placement, systems thinking, and judgement under pressure.
              </p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/guides"
              className="text-orange-600 font-medium hover:underline"
            >
              Explore Learning Pathways →
            </Link>
          </div>
        </div>
      </section>

      {/* Gear Section */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-stone-900 mb-4">
              Build Your Kit
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto">
              Gear should match your stage. Start with indoor essentials, then
              add what you need for outdoor sport and trad progression.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <Link
              href="/gear/indoor"
              className="block rounded-lg p-4 hover:bg-white transition-colors"
            >
              <h3 className="text-xl font-semibold text-stone-900 mb-4">
                Indoor Kit
              </h3>
              <p className="text-stone-600">
                Core gear for gym rope climbing and first sessions.
              </p>
            </Link>

            <Link
              href="/gear/sport"
              className="block rounded-lg p-4 hover:bg-white transition-colors"
            >
              <h3 className="text-xl font-semibold text-stone-900 mb-4">
                Outdoor Sport Kit
              </h3>
              <p className="text-stone-600">
                Add the essentials for your first days climbing on real rock.
              </p>
            </Link>

            <Link
              href="/gear/trad"
              className="block rounded-lg p-4 hover:bg-white transition-colors"
            >
              <h3 className="text-xl font-semibold text-stone-900 mb-4">
                Trad Kit
              </h3>
              <p className="text-stone-600">
                Expand to a trad rack with progressive, practical additions.
              </p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gear"
              className="text-orange-600 font-medium hover:underline"
            >
              Explore Gear Pathways →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <LeadCaptureCallout />
        </div>
      </section>
    </main>
  );
}
