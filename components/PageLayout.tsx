type PageLayoutProps = {
  title: string;
  /** When set, shows a hero image with title overlaid; otherwise a simple title band. */
  heroImage?: { src: string; alt: string };
  children: React.ReactNode;
};

export default function PageLayout({
  title,
  heroImage,
  children,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-stone-100">
      {heroImage ? (
        <section className="relative h-[40vh] min-h-[280px] max-h-[420px] w-full overflow-hidden">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute left-0 right-0 top-0 flex flex-col items-start pt-12 sm:pt-16">
            <div className="max-w-3xl w-full mx-auto px-5 sm:px-6">
              <h1 className="text-4xl font-bold text-stone-100 drop-shadow-sm">
                {title}
              </h1>
              <div
                className="mt-2 h-1 w-16 rounded-full bg-orange-500"
                aria-hidden
              />
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-stone-100 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <h1 className="text-4xl font-bold text-stone-900">{title}</h1>
            <div
              className="mt-2 h-1 w-16 rounded-full bg-orange-500"
              aria-hidden
            />
          </div>
        </section>
      )}
      {children}
    </div>
  );
}
