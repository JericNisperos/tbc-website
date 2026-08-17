import Image from "next/image";
import Link from "next/link";
import { baristaDrinks, baristaDrinkImagePath } from "@/lib/baristaDrinks";

// Style 1/5 — Modern Neo-Brutalist (matches the current site design system)
export const dynamic = "force-static";

export default function MenuModernPage() {
  return (
    <>
      <nav className="bg-surface border-b-2 border-primary sticky top-0 z-50">
        <div className="max-w-[1100px] mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/tbc.png"
              alt="The Barrio Café"
              width={40}
              height={40}
              className="w-9 h-9 md:w-10 md:h-10"
            />
          </div>
          <Link
            href="/menu"
            className="font-mono text-label-caps text-on-surface-variant hover:text-primary"
          >
            ← All Styles
          </Link>
        </div>
      </nav>

      <section className="border-b-2 border-primary">
        <div className="max-w-[1100px] mx-auto px-4 md:px-12 py-16 md:py-24">
          <span className="font-mono text-label-caps uppercase text-on-surface-variant block mb-6">
            — Calm in every cup
          </span>
          <h1 className="font-display italic leading-[0.95] tracking-tight text-[56px] sm:text-[88px] md:text-[120px] font-extrabold">
            The Barrio
            <br />
            Café
          </h1>
          <p className="font-body text-body-lg max-w-2xl text-on-surface-variant mt-6">
            Signature Filipino flavors, hand-pulled coffee, and artisanal
            refreshments served daily from our little corner of the barrio.
          </p>
        </div>
      </section>

      <main className="max-w-[1100px] mx-auto px-4 md:px-12 py-12 md:py-16">
        <header className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-primary pb-4">
            <div>
              <h2 className="font-display text-display-lg uppercase italic leading-tight">
                Barista Drink
              </h2>
              <p className="font-body text-body-lg text-on-surface-variant">
                Prices in PHP. Please inform our staff of any allergies.
              </p>
            </div>
            <div className="font-mono text-label-caps text-on-surface-variant">
              EST. 2023
            </div>
          </div>
        </header>

        {/* ——— Design 1: Grid Cards ——— */}
        <div className="mb-20">
          <p className="font-mono text-label-caps uppercase text-tertiary mb-5">
            Design 1 — Grid Cards
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {baristaDrinks.map((item) => (
              <div
                key={item.src}
                className="menu-card hard-shadow-sm flex flex-col items-center text-center gap-3"
              >
                <span className="self-start font-mono text-[10px] uppercase tracking-widest border border-outline px-2 py-0.5 text-on-surface-variant">
                  {item.tag}
                </span>
                <div className="relative w-full aspect-square">
                  <Image
                    src={baristaDrinkImagePath(item.src)}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>
                <div className="font-display text-[18px] uppercase font-semibold">
                  {item.name}
                </div>
                <div className="font-mono text-price">{item.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ——— Design 2: List ——— */}
        <div className="mb-20">
          <p className="font-mono text-label-caps uppercase text-tertiary mb-5">
            Design 2 — List
          </p>
          <div className="menu-card hard-shadow-sm divide-y-2 divide-primary">
            {baristaDrinks.map((item) => (
              <div key={item.src} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                <div className="relative w-16 h-16 shrink-0 border border-outline bg-surface-container-lowest">
                  <Image
                    src={baristaDrinkImagePath(item.src)}
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
                    {item.tag}
                  </span>
                  <span className="font-display text-[18px] uppercase font-semibold truncate">
                    {item.name}
                  </span>
                </div>
                <div className="dotted-leader" />
                <span className="font-mono text-price shrink-0">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ——— Design 3: Single Container ——— */}
        <div className="mb-20">
          <p className="font-mono text-label-caps uppercase text-tertiary mb-5">
            Design 3 — Single Container
          </p>
          <div className="menu-card hard-shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            {baristaDrinks.map((item) => (
              <div
                key={item.src}
                className="flex items-center gap-3 py-3 border-b border-dashed border-outline-variant last:border-0 sm:[&:nth-last-child(-n+2)]:border-0"
              >
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src={baristaDrinkImagePath(item.src)}
                    alt={item.name}
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
                <span className="font-display text-[15px] uppercase font-semibold truncate">
                  {item.name}
                </span>
                <div className="dotted-leader" />
                <span className="font-mono text-[14px] shrink-0">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ——— Design 4: Horizontal Strip ——— */}
        <div>
          <p className="font-mono text-label-caps uppercase text-tertiary mb-5">
            Design 4 — Horizontal Strip
          </p>
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
            {baristaDrinks.map((item) => (
              <div
                key={item.src}
                className="menu-card hard-shadow-sm shrink-0 w-40 flex flex-col items-center text-center gap-2"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={baristaDrinkImagePath(item.src)}
                    alt={item.name}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
                <div className="font-display text-[14px] uppercase font-semibold leading-tight">
                  {item.name}
                </div>
                <div className="font-mono text-[13px]">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-surface border-t-2 border-primary mt-12">
        <div className="max-w-[1100px] mx-auto px-4 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="font-display text-headline-md font-bold uppercase">
            The Barrio Café
          </div>
          <div className="font-mono text-[10px] text-on-surface-variant tracking-widest">
            © 2023 The Barrio Café · All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}
