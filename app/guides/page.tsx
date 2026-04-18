import type { Metadata } from "next";
import BackNavLink from "@/components/BackNavLink";
import LeadCaptureCallout from "@/components/leads/LeadCaptureCallout";
import LinkCard from "@/components/LinkCard";
import PageLayout from "@/components/PageLayout";
import PageSection from "@/components/PageSection";

export const metadata: Metadata = {
  title: "Climbing Guides",
  description:
    "Browse structured climbing guides covering indoor foundations, outdoor sport systems, and trad progression.",
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    title: "Climbing Guides",
    description:
      "Browse structured climbing guides covering indoor foundations, outdoor sport systems, and trad progression.",
    url: "/guides",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Climbing Guides",
    description:
      "Browse structured climbing guides covering indoor foundations, outdoor sport systems, and trad progression.",
  },
};

export default function GuidesPage() {
  return (
    <PageLayout
      title="Build Your Skills"
      heroImage={{
        src: "/images/guides-hero-2.jpg",
        alt: "Climbing skills and progression",
      }}
    >
      <PageSection bg="white">
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
      </PageSection>

      <PageSection bg="stone-50">
        <h2 className="text-sm font-medium uppercase tracking-wider text-stone-500 mb-6">
          Choose a pathway
        </h2>
        <div className="flex flex-col gap-6">
          <LinkCard
            href="/guides/indoor"
            title="Indoor foundations"
            description="Movement skills, belay systems, and confidence building. The base for everything that follows."
          />
          <LinkCard
            href="/guides/outdoor"
            title="Outdoor sport"
            description="Anchors, safety systems, route reading, and decision making. From first outdoor day to leading confidently."
          />
          <LinkCard
            href="/guides/trad"
            title="Trad climbing"
            description="Gear placement, systems thinking, and judgement under pressure. Building toward trad when you're ready."
          />
        </div>
        <div className="mt-10">
          <LeadCaptureCallout
            title="Follow new guide releases"
            description="Get updates when new indoor, outdoor sport, and trad guides are published."
          />
        </div>
        <BackNavLink href="/">Back to Home</BackNavLink>
      </PageSection>
    </PageLayout>
  );
}
