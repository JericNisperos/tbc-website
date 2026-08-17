import Link from "next/link";

// Pitch hub — pick a design direction. Each style is a full standalone mock.
export const dynamic = "force-static";

const styles = [
  {
    href: "/menu/modern",
    name: "Modern",
    blurb: "Bold neo-brutalist type, hard shadows, black-and-white — matches the current site.",
  },
  {
    href: "/menu/classic",
    name: "Classic",
    blurb: "Sepia parchment, serif type, gold hairlines — old-world café elegance.",
  },
  {
    href: "/menu/rustic",
    name: "Rustic Provincial",
    blurb: "Kraft paper, hand-tag labels, dashed borders — bahay-kubo market stall.",
  },
  {
    href: "/menu/minimal",
    name: "Minimalist Elegant",
    blurb: "Sage palette, hairline rules, generous whitespace — quiet and refined.",
  },
  {
    href: "/menu/playful",
    name: "Playful",
    blurb: "Pastel cards, rounded type, sticker badges — friendly and approachable.",
  },
];

export default function MenuIndexPage() {
  return (
    <main className="max-w-[800px] mx-auto px-6 py-20">
      <p className="font-mono text-label-caps uppercase text-on-surface-variant mb-3">
        The Barrio Café — Design Pitch
      </p>
      <h1 className="font-display text-display-lg uppercase italic mb-4">
        Pick a Direction
      </h1>
      <p className="font-body text-body-lg text-on-surface-variant mb-12 max-w-xl">
        Five layout styles, same Barista Drink menu. Click through to compare.
      </p>

      <div className="flex flex-col gap-4">
        {styles.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="menu-card hard-shadow-sm flex items-center justify-between gap-4 hover:-translate-y-0.5 hover:shadow-none transition"
          >
            <div>
              <div className="font-display text-headline-md uppercase font-bold">
                {s.name}
              </div>
              <div className="font-body text-body-md text-on-surface-variant">
                {s.blurb}
              </div>
            </div>
            <span className="font-mono text-label-caps shrink-0">→</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
