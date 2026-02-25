type PageSectionProps = {
  /** Background colour for the band */
  bg?: "white" | "stone-50" | "stone-100";
  children: React.ReactNode;
};

export default function PageSection({
  bg = "white",
  children,
}: PageSectionProps) {
  const bgClass =
    bg === "white"
      ? "bg-white"
      : bg === "stone-50"
        ? "bg-stone-50"
        : "bg-stone-100";

  return (
    <section className={`${bgClass} py-12 sm:py-16`}>
      <div className="max-w-3xl mx-auto px-5 sm:px-6">{children}</div>
    </section>
  );
}
