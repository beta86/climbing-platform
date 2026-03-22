import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackNavLink from "@/components/BackNavLink";
import PageLayout from "@/components/PageLayout";
import PageSection from "@/components/PageSection";
import { disciplineLabel, kits } from "@/data/kits";

type Discipline = keyof typeof kits;

function isValidDiscipline(s: string): s is Discipline {
  return s in kits;
}

type Props = {
  params: Promise<{ discipline: string }>;
};

type GearPageContent = {
  intro: string;
  buildsOn?: string;
  progressionException?: {
    title: string;
    body: string;
  };
  essentials: string[];
  addSoon?: string[];
  niceToHave?: string[];
  notes: string[];
  next?: { href: string; label: string };
};

const gearContent: Record<Discipline, GearPageContent> = {
  indoor: {
    intro:
      "This is a practical starter list for indoor rope climbing. Keep it simple at first and build good habits with gear you know well.",
    essentials: [
      "Harness",
      "Climbing shoes",
      "Assisted-braking belay device",
      "Screwgate locking karabiner for belay device",
      "Dynamic single rope",
      "Chalk bag",
      "Chalk",
    ],
    addSoon: ["Rope bag / tarp (if bringing your own rope)"],
    notes: [
      "For indoor and sport climbing, an assisted-braking belay device is preferred.",
      "Always follow your wall's specific belay and equipment requirements.",
    ],
    next: { href: "/gear/sport", label: "Next: Outdoor Sport Kit" },
  },
  sport: {
    intro:
      "This list is for your first outdoor sport days. It builds on your indoor kit and adds the core items needed for climbing on real rock.",
    buildsOn: "Includes your Indoor Kit, plus:",
    essentials: [
      "Quickdraws",
      "Extra screwgate locking karabiners",
      "Sling or personal lanyard",
      "Helmet",
      "Rope bag / tarp",
    ],
    addSoon: ["Guidebook or topo app access"],
    notes: [
      "Outdoor systems add more judgement and responsibility than gym climbing.",
      "Build your rack around the routes and crags you actually plan to climb.",
    ],
    next: { href: "/gear/trad", label: "Next: Trad Kit" },
  },
  trad: {
    intro:
      "Trad climbing adds removable protection and more complex systems. This list covers the core additions beyond indoor and sport climbing.",
    buildsOn: "Includes your Indoor + Outdoor Sport Kit, plus:",
    progressionException: {
      title: "Trad rope setup note (UK)",
      body: "Many UK trad routes are climbed on half ropes (a pair) rather than a single rope. If you use half ropes, your belay, abseil, and rope management setup should match that system.",
    },
    essentials: [
      "Nut set",
      "Hexes",
      "Cams",
      "Prusik loops",
      "Alpine draws",
      "Nut key",
      "Additional karabiners (mix of wiregates and lockers)",
    ],
    addSoon: [
      "Extra slings (for anchors and extensions)",
      "Extra locking karabiners for belays/anchors",
    ],
    niceToHave: ["Second nut key", "Spare prusik cord"],
    notes: [
      "In this progression, anchor material is built around slings and rope.",
      "Trad progression depends on judgement and systems as much as hardware choice.",
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { discipline } = await params;

  if (!isValidDiscipline(discipline)) {
    return {};
  }

  const title = `${disciplineLabel[discipline]} beginner kit`;

  return {
    title,
    description: `Essential ${disciplineLabel[discipline].toLowerCase()} climbing kit recommendations for beginners, including the core gear to start safely and confidently.`,
  };
}

export default async function GearDisciplinePage({ params }: Props) {
  const { discipline } = await params;

  if (!isValidDiscipline(discipline)) {
    notFound();
  }

  const title = `${disciplineLabel[discipline]} beginner kit`;
  const content = gearContent[discipline];

  return (
    <PageLayout title={title}>
      <PageSection bg="white">
        <div className="space-y-8">
          <p className="text-stone-700 leading-relaxed">{content.intro}</p>

          {content.buildsOn && (
            <p className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-green-800 shadow-sm">
              {content.buildsOn}
            </p>
          )}

          {content.progressionException && (
            <section className="rounded-lg border border-orange-200 bg-orange-50 px-4 py-3 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-orange-800">
                {content.progressionException.title}
              </h2>
              <p className="mt-2 text-sm font-medium leading-relaxed text-green-900">
                {content.progressionException.body}
              </p>
            </section>
          )}

          <section>
            <h2 className="text-lg font-semibold text-stone-900">
              Essentials
            </h2>
            <ul className="mt-3 space-y-2 list-disc pl-6 text-stone-700 leading-relaxed">
              {content.essentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {content.addSoon && (
            <section>
              <h2 className="text-lg font-semibold text-stone-900">Add soon</h2>
              <ul className="mt-3 space-y-2 list-disc pl-6 text-stone-700 leading-relaxed">
                {content.addSoon.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {content.niceToHave && (
            <section>
              <h2 className="text-lg font-semibold text-stone-900">
                Nice to have
              </h2>
              <ul className="mt-3 space-y-2 list-disc pl-6 text-stone-700 leading-relaxed">
                {content.niceToHave.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="text-lg font-semibold text-stone-900">Notes</h2>
            <ul className="mt-3 space-y-2 list-disc pl-6 text-stone-700 leading-relaxed">
              {content.notes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {content.next && (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                href={content.next.href}
                className="text-orange-600 font-medium hover:text-orange-500 transition-colors duration-150"
              >
                {content.next.label}
              </Link>
            </div>
          )}
        </div>

        <BackNavLink href="/gear">Back to Climbing Gear</BackNavLink>
      </PageSection>
    </PageLayout>
  );
}
