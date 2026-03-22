import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import PageSection from "@/components/PageSection";
import FrostedPanel from "@/components/FrostedPanel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Ben and learn the story, philosophy, and mission behind Ground Up climbing progression guides.",
};

export default function AboutPage() {
  return (
    <PageLayout title="About Ground Up">
      <PageSection bg="white">
        <p className="text-xl text-stone-600 font-medium">Hi, I&apos;m Ben</p>
        <div className="mt-8 grid gap-8 md:grid-cols-5 md:gap-10 items-start md:items-center">
          <div className="md:col-span-3 space-y-6 text-stone-700 leading-relaxed">
            <p>
              I started climbing about 15 years ago in my mid-20s. Like a lot
              of people, I got into it simply because it looked fun. I booked
              onto a learn-to-belay course at a local wall, and that was the
              start of it.
            </p>
            <p>
              Since then climbing has become a huge part of my life. I climb
              indoors once or twice a week and get outside for sport and trad
              whenever I can. Living close to the Wye Valley and South Wales
              means those areas see a lot of my time, but I love getting
              further afield too — especially North Wales, Pembroke and
              Portland.
            </p>
            <p>
              My ideal climbing weekend would be a trip to North Wales where I
              can squeeze in a bit of everything — a day of trad climbing, some
              scrambling in the Ogwen Valley, and maybe finishing the weekend
              with some humbling sport climbing in the slate quarries.
            </p>
            <p>
              Like most climbers, I balance climbing around a regular job and
              family life, which means the time I do get on rock is something I
              really value.
            </p>
          </div>
          <figure className="md:col-span-2">
            <img
              src="/images/about.png"
              alt="Ben climbing outdoors"
              className="w-full rounded-xl object-cover aspect-4/5 md:aspect-3/4 shadow-md"
            />
          </figure>
        </div>
      </PageSection>

      <PageSection bg="stone-50">
        <div className="max-w-4xl">
          <FrostedPanel className="py-6 bg-white border-stone-200">
            <h2 className="text-lg font-semibold text-stone-900">
              Climbing Background
            </h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2 text-stone-700">
              <div>
                <dt className="text-sm font-medium text-stone-500">
                  Climbing Experience
                </dt>
                <dd>15+ years</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-stone-500">
                  Disciplines
                </dt>
                <dd>Trad, Sport, Indoor, Scrambling</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-stone-500">
                  Regular Areas
                </dt>
                <dd>Wye Valley, South Wales</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-stone-500">
                  Favourite Areas
                </dt>
                <dd>North Wales, Pembroke, Portland</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-stone-500">
                  Instructor Path
                </dt>
                <dd>RCI → RCDI</dd>
              </div>
            </dl>
          </FrostedPanel>
        </div>
      </PageSection>

      <PageSection bg="white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-stone-900">
            Why I Started Ground Up
          </h2>
          <div className="mt-6 space-y-6 text-stone-700 leading-relaxed">
            <p>
              Climbing has given me a huge amount over the years, and I&apos;d
              love to build a life where it plays a bigger role in my day-to-day
              work.
            </p>
            <p>
              Ground Up started as a way to begin that journey — a place to
              share some of the skills and knowledge I&apos;ve picked up along
              the way, whether that&apos;s climbing advice, systems and safety
              skills, or honest gear recommendations.
            </p>
            <p>
              More importantly, I wanted to create something that helps make
              climbing more accessible.
            </p>
            <p>
              Being new to climbing can feel overwhelming. There&apos;s a lot to
              learn, and because safety matters, it&apos;s important to get the
              fundamentals right. Ground Up aims to break things down clearly
              and help climbers build their skills step by step.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection bg="stone-50">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-stone-900">
            Climbing Philosophy
          </h2>
          <div className="mt-6 space-y-6 text-stone-700 leading-relaxed">
            <p>
              When people first start climbing, it&apos;s very easy to become
              focused on grades. Most of us do it at some point.
            </p>
            <p>
              But over time, you realise that grades aren&apos;t the most
              important thing.
            </p>
            <p>
              Judgement is the most important skill in climbing — knowing what
              to do in different situations and making good decisions. After
              that comes developing solid skills and gaining experience.
            </p>
            <p>
              Climbing should always be about enjoying the process. Learning new
              skills, spending time outside, challenging yourself, and looking
              after both your physical and mental wellbeing.
            </p>
            <p>
              If you focus on building strong fundamentals and enjoying the
              time you spend climbing, the grades usually take care of
              themselves.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection bg="white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-stone-900">
            Instructor Journey
          </h2>
          <div className="mt-6 space-y-6 text-stone-700 leading-relaxed">
            <p>
              I&apos;m currently working towards becoming a Rock Climbing
              Instructor (RCI), with the goal of qualifying in 2027.
            </p>
            <p>
              After that, I plan to continue progressing towards the Rock
              Climbing Development Instructor (RCDI) qualification, which
              focuses more on coaching and helping climbers improve their
              technique and performance.
            </p>
            <p>
              Long term, I&apos;d love to teach a range of climbing disciplines —
              indoor climbing, outdoor sport climbing, and traditional climbing
              — helping people progress safely and confidently in the sport.
            </p>
            <p>
              Ground Up is one of the first steps in that direction.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection bg="stone-50">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-stone-900">
            From the Ground Up
          </h2>
          <div className="mt-6 space-y-6 text-stone-700 leading-relaxed">
            <p>
              The idea behind Ground Up is simple: build your climbing the right
              way.
            </p>
            <p>
              Start with solid fundamentals, develop the right habits, and
              progress in a way that keeps climbing enjoyable and sustainable
              for years to come.
            </p>
            <p>
              Whether you&apos;re tying in for the first time or looking to
              strengthen your systems and skills, the goal is the same.
            </p>
            <div className="mt-8 space-y-2 font-medium text-stone-900 text-lg">
              <p>Climb well.</p>
              <p>Climb safely.</p>
              <p>Build it from the ground up.</p>
            </div>
            <p className="mt-8 text-stone-700">
              If you&apos;re new to climbing and not sure where to begin, the{" "}
              <Link
                href="/guides"
                className="text-orange-600 font-medium hover:text-orange-500 transition-colors duration-150"
              >
                Learn section
              </Link>{" "}
              is the best place to start.
            </p>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
