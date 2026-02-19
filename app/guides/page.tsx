import LinkCard from "@/components/LinkCard";

export default function GuidesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-stone-100">Learning pathways</h1>
        <p className="mt-2 text-stone-400">
          Structured progression for indoor, sport, and trad climbers — built
          step by step.
        </p>
      </header>

      <div className="flex flex-col gap-4">
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
    </div>
  );
}
