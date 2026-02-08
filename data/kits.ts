export type Discipline = "indoor" | "sport" | "trad" | "bouldering";

export type KitItem = {
  name: string;
  note: string;
  estPrice: string;
  affiliate: string;
};

export const kits: Record<
  Exclude<Discipline, "bouldering">,
  { beginner: KitItem[] }
> = {
  indoor: {
    beginner: [
      {
        name: "Climbing shoes",
        note: "Comfortable fit for sessions. Avoid too tight when starting.",
        estPrice: "£50–£90",
        affiliate: "https://example.com/shoes",
      },
      {
        name: "Chalk bag",
        note: "Keeps hands dry and improves grip.",
        estPrice: "£10–£25",
        affiliate: "https://example.com/chalk-bag",
      },
    ],
  },
  sport: {
    beginner: [
      {
        name: "Harness",
        note: "Comfort > weight for beginners.",
        estPrice: "£50–£80",
        affiliate: "https://example.com/harness",
      },
      {
        name: "Belay Device (Assisted Braking)",
        note: "Safer for outdoor use.",
        estPrice: "£60–£90",
        affiliate: "https://example.com/belay",
      },
    ],
  },
  trad: {
    beginner: [
      {
        name: "Harness",
        note: "Comfort > weight for beginners.",
        estPrice: "£50–£80",
        affiliate: "https://example.com/harness",
      },
      {
        name: "Belay Device (Manual)",
        note: "Manual devices require more experience.",
        estPrice: "£50–£70",
        affiliate: "https://example.com/belay-trad",
      },
    ],
  },
};

/** Order to show disciplines on the gear page. Add "bouldering" when ready. */
export const gearPageOrder: Discipline[] = ["indoor", "sport", "trad"];

export const disciplineLabel: Record<Discipline, string> = {
  indoor: "Indoor",
  sport: "Sport",
  trad: "Trad",
  bouldering: "Bouldering",
};
