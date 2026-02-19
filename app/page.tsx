import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[65vh] min-h-[420px] max-h-[700px] overflow-hidden">
        <div className="absolute inset-0 min-h-[420px]">
          <img
            src="/images/hero.jpg"
            alt="Outdoor sport climber on a steep route"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
        </div>

        <div className="absolute inset-0 bg-stone-950/25" aria-hidden />

        {/* Hero Content: mobile = content at bottom; desktop = true vertical centre */}
        <div className="absolute inset-0 flex flex-col items-center px-4">
          <div className="flex-1 min-h-0" aria-hidden />
          <div className="flex flex-col items-center text-center pb-12 pt-0 md:pt-16 md:pb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6 leading-tight">
              Build Your Climbing From the Ground Up
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-16 md:mb-8">
              Structured progression for indoor, sport, and trad climbers —
              built step by step.
            </p>
            <Link
              href="/guides"
              className="bg-orange-600 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-orange-500 transition"
            >
              Start Your Progression
            </Link>
          </div>
          <div className="flex-1 min-h-0 hidden md:block" aria-hidden />
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
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-4">
                Indoor Foundations
              </h3>
              <p className="text-stone-600">
                Movement skills, belay systems, and confidence building.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-4">
                Outdoor Sport
              </h3>
              <p className="text-stone-600">
                Anchors, safety systems, route reading, and decision making.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-4">
                Trad Climbing
              </h3>
              <p className="text-stone-600">
                Gear placement, systems thinking, and judgement under pressure.
              </p>
            </div>
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
    </main>
  );
}
