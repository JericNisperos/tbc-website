import { Marcellus, Jost } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { baristaDrinks, baristaDrinkImagePath } from "@/lib/baristaDrinks";

// Style 4/5 — Minimalist Elegant: sage palette, hairlines, generous whitespace.
export const dynamic = "force-static";

const marcellus = Marcellus({ subsets: ["latin"], weight: "400" });
const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function MenuMinimalPage() {
  return (
    <div
      className={`${jost.className} min-h-screen`}
      style={{ backgroundColor: "#eef1ea", color: "#2b2b26" }}
    >
      <nav
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: "#eef1ea", borderColor: "#c6cdbc" }}
      >
        <div className="max-w-[1000px] mx-auto px-6 py-6 flex items-center justify-between">
          <Image src="/assets/tbc.png" alt="The Barrio Café" width={30} height={30} />
          <Link
            href="/menu"
            className="text-[12px] tracking-[0.25em] uppercase opacity-60 hover:opacity-100"
          >
            ← All Styles
          </Link>
        </div>
      </nav>

      <section className="max-w-[760px] mx-auto px-6 pt-24 pb-20 text-center">
        <p
          className="text-[11px] tracking-[0.4em] uppercase mb-8"
          style={{ color: "#6b7a5e" }}
        >
          Calm in Every Cup
        </p>
        <h1 className={`${marcellus.className} text-[44px] md:text-[64px] leading-tight`}>
          The Barrio Café
        </h1>
        <p className="text-[16px] font-light leading-relaxed max-w-md mx-auto mt-8 opacity-70">
          Signature Filipino flavors, hand-pulled coffee, and artisanal
          refreshments served daily from our little corner of the barrio.
        </p>
      </section>

      <main className="max-w-[900px] mx-auto px-6 pb-28">
        <header className="text-center mb-16">
          <h2 className={`${marcellus.className} text-[30px]`}>Barista Drink</h2>
          <div
            className="mx-auto mt-4 w-10 h-px"
            style={{ backgroundColor: "#6b7a5e" }}
          />
          <p className="text-[13px] font-light opacity-60 mt-4">
            Prices in PHP · Please inform our staff of any allergies
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16">
          {baristaDrinks.map((item) => (
            <div key={item.src} className="text-center">
              <div className="relative aspect-square mb-6">
                <Image
                  src={baristaDrinkImagePath(item.src)}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#6b7a5e" }}
                />
                <span className="text-[10px] tracking-[0.25em] uppercase opacity-60">
                  {item.tag}
                </span>
              </div>
              <h3 className={`${marcellus.className} text-[19px]`}>{item.name}</h3>
              <div
                className="mx-auto my-3 w-6 h-px opacity-40"
                style={{ backgroundColor: "#2b2b26" }}
              />
              <p className="text-[15px] font-light">{item.price}</p>
            </div>
          ))}
        </div>
      </main>

      <footer
        className="border-t py-12 text-center"
        style={{ borderColor: "#c6cdbc" }}
      >
        <div className={`${marcellus.className} text-[18px] mb-2`}>
          The Barrio Café
        </div>
        <div className="text-[11px] tracking-[0.2em] uppercase opacity-50">
          © 2023 · All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
