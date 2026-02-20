import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[65vh] min-h-[420px] max-h-[700px] overflow-hidden">
        <div className="absolute inset-0 min-h-[420px]">
          <img
            src="/images/hero-mobile.png"
            alt="Outdoor sport climber on a steep route"
            className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
            fetchPriority="high"
          />
          <img
            src="/images/hero.png"
            alt="Outdoor sport climber on a steep route"
            className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
            fetchPriority="high"
          />
        </div>

        <div className="absolute inset-0 bg-stone-950/25 hidden md:block" aria-hidden />

        {/* Hero Content: button at bottom of image */}
        <div className="absolute inset-0 flex flex-col items-center justify-end px-4 pb-8">
          <Link
            href="/guides"
            className="bg-orange-600 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-orange-500 transition"
          >
            Start Your Progression
          </Link>
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
    </main>
  );
}
