import type { Metadata } from "next";
import Link from "next/link";
import FrostedPanel from "@/components/FrostedPanel";

export const metadata: Metadata = {
  title: "Introduction to Indoor Roped Climbing | Ground Up",
  description:
    "Learn the fundamentals of indoor roped climbing: top roping vs lead climbing, belay systems, buddy checks, communication, and safe progression.",
  openGraph: {
    title: "Introduction to Indoor Roped Climbing | Ground Up",
    description:
      "A practical beginner guide to indoor roped climbing, covering systems, safety checks, belay devices, and progression.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Introduction to Indoor Roped Climbing | Ground Up",
    description:
      "A practical beginner guide to indoor roped climbing, covering systems, safety checks, belay devices, and progression.",
  },
};

export default function IndoorIntroductionGuidePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url(/images/topo-bg-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="absolute inset-0 bg-white/45" aria-hidden /> */}
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 py-14 sm:py-18">
          <FrostedPanel className="py-6 sm:py-8">
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-stone-900">
              Introduction to Indoor Roped Climbing
            </h1>
            <p className="mt-5 max-w-2xl text-stone-700 text-lg leading-relaxed">
              Indoor climbing takes place on artificial walls with routes set
              using coloured holds. It&apos;s a controlled environment designed
              for progression — but it still demands attention and
              responsibility.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-green-700">
                Beginner
              </span>
              <span className="rounded-full border border-stone-300 bg-white/70 px-3 py-1 text-stone-600">
                Roped climbing
              </span>
              <span className="rounded-full border border-stone-300 bg-white/70 px-3 py-1 text-stone-600">
                ~5 min read
              </span>
            </div>
          </FrostedPanel>
        </div>
      </header>

      <main className="py-12 sm:py-16">
        <article className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 py-2">
            <section>
              <h2 className="text-base font-semibold text-stone-900">
                What you&apos;ll learn
              </h2>
              <ul className="mt-3 space-y-2 text-stone-700 list-disc pl-6">
                <li>Difference between top rope and lead climbing</li>
                <li>Core belay system components</li>
                <li>Buddy check essentials</li>
                <li>Safe communication habits</li>
              </ul>
            </section>
            <section>
              <h2 className="text-base font-semibold text-stone-900">
                Who this is for
              </h2>
              <p className="mt-3 text-stone-700 leading-relaxed">
                New indoor climbers starting roped climbing, or anyone
                preparing for a gym induction or belay competency assessment.
              </p>
            </section>
          </div>

          <section className="mt-12 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-stone-900">
                Indoor climbing basics
              </h2>
              <p className="mt-4 text-stone-700 leading-relaxed">
                There are two main disciplines indoors:
              </p>
              <ul className="mt-3 space-y-2 text-stone-700 list-disc list-inside">
                <li>
                  <strong>Bouldering</strong> — shorter climbs over padded
                  flooring, without ropes.
                </li>
                <li>
                  <strong>Roped climbing</strong> — climbing while connected to a
                  partner via a rope and belay system.
                </li>
              </ul>
              <p className="mt-4 text-stone-700 leading-relaxed">
                This guide focuses on roped climbing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-stone-900">
                Top roping and lead climbing
              </h2>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Most people begin with top roping. The rope runs from the
                climber, up to an anchor at the top of the wall, and back down
                to the belayer. The belayer manages the rope, taking in slack
                as the climber moves and lowering them when they finish.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Because the rope is already fixed above, falls are short and
                controlled. It&apos;s the safest and most accessible way to
                begin roped climbing.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                As climbers progress, they may move to lead climbing, where the
                climber clips the rope into protection points as they ascend.
                This introduces larger falls and greater responsibility.
                We&apos;ll cover lead climbing in a separate guide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-stone-900">
                The belay system
              </h2>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Roped climbing works because of a simple but critical system
                between two people. That system includes:
              </p>
              <ul className="mt-3 space-y-2 text-stone-700 list-disc list-inside">
                <li>A properly fitted harness</li>
                <li>A climbing rope</li>
                <li>A belay device</li>
                <li>A locking carabiner</li>
                <li>Clear, agreed communication</li>
              </ul>
              <p className="mt-4 text-stone-700 leading-relaxed">
                The climber moves upward. The belayer manages the rope below.
                Both are responsible for paying attention.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Roped climbing is not a solo activity. It is a partnership
                built on focus and trust.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-stone-900">
                The buddy check
              </h2>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Before every climb, both climber and belayer should perform a
                full buddy check. This means visually and physically checking:
              </p>
              <ul className="mt-3 space-y-2 text-stone-700 list-disc list-inside">
                <li>Harness fitted correctly and secured</li>
                <li>Waistbelt positioned above the hips</li>
                <li>
                  Figure of 8 knot tied correctly, dressed, and finished with
                  an appropriate stopper
                </li>
                <li>Belay device threaded correctly</li>
                <li>Locking carabiner properly locked</li>
              </ul>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Even experienced climbers make small mistakes — especially when
                distracted, tired, or rushing. A proper buddy check takes
                seconds and prevents serious accidents.
              </p>
              <p className="mt-4 font-medium text-stone-900 leading-relaxed">
                Make it a habit. Every climb.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-stone-900">
                Belay devices
              </h2>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Most indoor climbers use one of two types of belay device.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                <strong>Tube-style devices</strong> (often referred to as
                ATC-style devices) rely entirely on the belayer maintaining a
                secure brake hand position. They are simple, widely used, and
                effective when handled correctly.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                <strong>Assisted braking devices</strong> add a mechanical
                feature that helps the rope lock under load. Many gyms now
                require them. However, assisted does not mean automatic.
                Proper technique and an active brake hand are still essential.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Whichever device you use, understanding how it functions is
                part of being a responsible partner.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-stone-900">
                Learning to climb indoors
              </h2>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Most climbing gyms require new climbers to complete an
                induction or pass a belay competency assessment before climbing
                independently.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                In the UK, there is no single national standard for these
                tests. Each gym sets its own criteria. Typically, you will be
                asked to demonstrate:
              </p>
              <ul className="mt-3 space-y-2 text-stone-700 list-disc list-inside">
                <li>Correct harness fitting</li>
                <li>
                  A properly tied figure of 8 rethreaded knot with stopper
                </li>
                <li>Safe and controlled belaying</li>
                <li>Often, the ability to catch a fall and lower safely</li>
              </ul>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Passing a competency test means you&apos;ve met that gym&apos;s
                minimum safety standard. It does not replace continued learning
                or careful practice.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                If you&apos;re new to roped climbing, learning from a qualified
                instructor is strongly recommended. Good habits are easier to
                build early than to correct later.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-stone-900">
                Communication and responsibility
              </h2>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Clear communication is part of the system. Simple calls such as:
              </p>
              <ul className="mt-3 space-y-1 text-stone-700 font-mono text-sm">
                <li>&quot;On belay?&quot; / &quot;Belay on.&quot;</li>
                <li>&quot;Climbing.&quot; / &quot;Climb on.&quot;</li>
                <li>&quot;Take.&quot; / &quot;Lower.&quot;</li>
              </ul>
              <p className="mt-4 text-stone-700 leading-relaxed">
                help confirm that both climber and belayer are ready and
                attentive.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Indoor climbing is structured and controlled, but it is not
                risk-free. Most incidents occur not because of complex
                failures, but because of simple oversights.
              </p>
              <p className="mt-4 font-medium text-stone-900 leading-relaxed">
                Stay present. Check each other. Climb deliberately.
              </p>
            </div>
          </section>

          <p className="mt-12 text-stone-700 leading-relaxed">
            Progress in climbing is built on systems and habits. Start with the
            fundamentals, and build from there.
          </p>
          <div className="mt-8">
            <Link
              href="/guides/indoor"
              className="text-orange-600 font-medium hover:text-orange-500 transition-colors duration-150"
            >
              Next guide
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/guides/indoor"
              className="inline-block mt-6 text-base text-stone-600 hover:text-orange-600 transition-colors duration-150"
            >
              Back to Indoor Foundations
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
