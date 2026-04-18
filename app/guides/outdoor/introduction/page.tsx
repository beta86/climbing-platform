import type { Metadata } from "next";
import Link from "next/link";
import BackNavLink from "@/components/BackNavLink";
import FrostedPanel from "@/components/FrostedPanel";
import LeadCaptureCallout from "@/components/leads/LeadCaptureCallout";

export const metadata: Metadata = {
  title: "Introduction to Outdoor Climbing",
  description:
    "A beginner introduction to outdoor climbing covering sport routes, top roping, anchors, communication, and responsible climbing systems.",
  alternates: {
    canonical: "/guides/outdoor/introduction",
  },
  openGraph: {
    title: "Introduction to Outdoor Climbing",
    description:
      "A beginner introduction to outdoor climbing covering sport routes, top roping, anchors, communication, and responsible climbing systems.",
    url: "/guides/outdoor/introduction",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Introduction to Outdoor Climbing",
    description:
      "A beginner introduction to outdoor climbing covering sport routes, top roping, anchors, communication, and responsible climbing systems.",
  },
};

export default function OutdoorIntroductionGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Introduction to Outdoor Climbing",
    description:
      "A beginner introduction to outdoor climbing covering sport routes, top roping, anchors, communication, and responsible climbing systems.",
    author: {
      "@type": "Person",
      name: "Ben",
    },
    publisher: {
      "@type": "Organization",
      name: "Ground Up",
      url: "https://groundupclimb.co.uk",
    },
    mainEntityOfPage: "https://groundupclimb.co.uk/guides/outdoor/introduction",
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <header
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url(/images/topo-bg-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 py-14 sm:py-18">
          <FrostedPanel className="py-6 sm:py-8">
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-stone-900">
              Introduction to Outdoor Climbing
            </h1>
            <p className="mt-5 max-w-2xl text-stone-700 text-lg leading-relaxed">
              For many climbers, a first day on real rock is a big step beyond
              the climbing gym. Movement and rope systems may feel familiar, but
              the environment, decisions, and responsibilities are different.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-green-700">
                Beginner
              </span>
              <span className="rounded-full border border-stone-300 bg-white/70 px-3 py-1 text-stone-600">
                Outdoor sport
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
                <li>How outdoor climbing differs from gym climbing</li>
                <li>Top rope vs lead systems on real rock</li>
                <li>Anchor and finishing-route basics</li>
                <li>Core safety and responsibility principles</li>
              </ul>
            </section>
            <section>
              <h2 className="text-base font-semibold text-stone-900">
                Who this is for
              </h2>
              <p className="mt-3 text-stone-700 leading-relaxed">
                Indoor climbers preparing for their first outdoor sessions, and
                anyone looking to understand the core systems before climbing on
                real rock.
              </p>
            </section>
          </div>

          <section className="mt-12 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-stone-900">
                How outdoor climbing works
              </h2>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Outdoor climbing takes place on natural rock rather than
                artificial walls. Routes are usually protected either by fixed
                bolts or by removable protection placed by the climber.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                If you&apos;re new to climbing outdoors, you&apos;ll most commonly
                encounter bolted sport routes, where climbers clip quickdraws
                into bolts as they climb.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Other routes require climbers to place their own protection
                using traditional gear. This style is known as trad climbing,
                which is covered in a separate section of this site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-stone-900">
                Leading outdoors
              </h2>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Many climbers lead routes outdoors in a similar way to leading
                in a gym, clipping the rope into protection as they climb.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                If you plan to lead outdoors, you should already be comfortable
                with core lead systems. If you&apos;re still building those skills,
                start with the{" "}
                <Link
                  href="/guides/indoor"
                  className="text-orange-600 font-medium hover:text-orange-500 transition-colors duration-150"
                >
                  Indoor Foundations
                </Link>{" "}
                guides first.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Once those fundamentals are solid, outdoor climbing builds on
                the same principles while introducing additional factors such as
                anchor choices, route reading, and environmental conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-stone-900">
                Top roping outdoors
              </h2>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Top roping outdoors can be a great way to gain experience on
                real rock.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Unlike in a gym, the rope is not already set up for you.
                Climbers usually need to build a top-rope system from anchors
                at the top of the route.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                It&apos;s also important to avoid repeatedly running the rope
                directly through fixed anchor hardware, as this can cause
                unnecessary wear. Instead, climbers typically set up a top rope
                using their own equipment.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                A dedicated guide later in this section explains how outdoor
                top-rope systems are set up safely.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-stone-900">
                Anchors and finishing routes
              </h2>
              <p className="mt-4 text-stone-700 leading-relaxed">
                At the top of many outdoor climbs you&apos;ll find an anchor system,
                usually made up of bolts connected with rings or chains.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                When finishing a climb, climbers often need to thread the rope
                through the anchor so they can be lowered while still retrieving
                their own equipment.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                This requires careful process, strong system understanding, and
                clear communication with your belayer. Later guides in this
                section explore these systems in detail.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-stone-900">
                Climbing outdoors responsibly
              </h2>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Outdoor climbing carries more responsibility than climbing in a
                gym. Climbers need to think about:
              </p>
              <ul className="mt-3 space-y-2 text-stone-700 list-disc list-inside">
                <li>How they use anchors and fixed hardware</li>
                <li>Clear communication with their partner</li>
                <li>Safe decisions around weather, rock conditions, and fatigue</li>
                <li>
                  Access, crag etiquette, and leaving the environment in good
                  condition
                </li>
              </ul>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Taking time to understand these systems helps climbers enjoy the
                experience while protecting the rock, hardware, and access for
                others.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-stone-900">
                Continue learning
              </h2>
              <p className="mt-4 text-stone-700 leading-relaxed">
                This article is an introduction to outdoor climbing. It does not
                replace supervised instruction, mentoring, or formal training.
              </p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Next in this section:
              </p>
              <ul className="mt-3 space-y-2 text-stone-700 list-disc list-inside">
                <li>How quickdraws are used on sport routes</li>
                <li>Setting up a top rope outdoors</li>
                <li>Understanding anchors</li>
                <li>Safely finishing a climb</li>
              </ul>
              <p className="mt-4 text-stone-700 leading-relaxed">
                Working through these guides will help you move from the
                climbing gym to outdoor climbing with confidence and good
                judgement.
              </p>
            </div>
          </section>
          <div className="mt-10">
            <LeadCaptureCallout
              title="Follow outdoor guide updates"
              description="Get notified as new outdoor sport guides are published and pathways expand."
            />
          </div>

          <div className="mt-8">
            <Link
              href="/guides/outdoor"
              className="text-orange-600 font-medium hover:text-orange-500 transition-colors duration-150"
            >
              Next guide
            </Link>
          </div>

          <div className="mt-8">
            <BackNavLink href="/guides/outdoor">
              Back to Outdoor Sport
            </BackNavLink>
          </div>
        </article>
      </main>
    </div>
  );
}
