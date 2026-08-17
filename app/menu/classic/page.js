import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { baristaDrinks, baristaDrinkImagePath } from "@/lib/baristaDrinks";

// Style 2/5 — Classic Vintage Café: sepia parchment, serif type, gold hairlines.
export const dynamic = "force-static";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function MenuClassicPage() {
  return (
    <div
      className={`${cormorant.className} min-h-screen`}
      style={{ backgroundColor: "#f6efe1", color: "#2e2018" }}
    >
      <nav
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: "#f6efe1", borderColor: "#a9752f" }}
      >
        <div className="max-w-[1000px] mx-auto px-6 py-5 flex items-center justify-between">
          <Image src="/assets/tbc.png" alt="The Barrio Café" width={36} height={36} />
          <Link
            href="/menu"
            className="text-[13px] tracking-[0.2em] uppercase hover:opacity-70"
            style={{ color: "#a9752f" }}
          >
            ← All Styles
          </Link>
        </div>
      </nav>

      <section className="max-w-[800px] mx-auto px-6 pt-20 pb-16 text-center">
        <p
          className="text-[13px] tracking-[0.35em] uppercase mb-6"
          style={{ color: "#a9752f" }}
        >
          Est. 2023 · Calm in Every Cup
        </p>
        <h1
          className={`${playfair.className} italic text-[52px] md:text-[80px] leading-[1.05]`}
        >
          The Barrio Café
        </h1>
        <div
          className="mx-auto my-7 w-40 h-px"
          style={{ backgroundColor: "#a9752f" }}
        />
        <p className="text-[19px] leading-relaxed max-w-xl mx-auto opacity-80">
          Signature Filipino flavors, hand-pulled coffee, and artisanal
          refreshments served daily from our little corner of the barrio.
        </p>
      </section>

      <main className="max-w-[1000px] mx-auto px-6 pb-24">
        <header className="text-center mb-14">
          <h2 className={`${playfair.className} text-[36px] md:text-[44px] italic`}>
            Barista Drink
          </h2>
          <p className="text-[15px] opacity-70 mt-2">
            Prices in Philippine Peso · Please inform our staff of any allergies
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {baristaDrinks.map((item) => (
            <div key={item.src} className="text-center">
              <div
                className="relative aspect-square mb-5 border"
                style={{ borderColor: "#a9752f", backgroundColor: "#fffdf8" }}
              >
                <div className="absolute inset-2 border" style={{ borderColor: "#dcc79a" }}>
                  <Image
                    src={baristaDrinkImagePath(item.src)}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <p
                className="text-[11px] tracking-[0.25em] uppercase mb-2"
                style={{ color: "#a9752f" }}
              >
                {item.tag}
              </p>
              <h3
                className={`${playfair.className} text-[21px] uppercase tracking-wide`}
              >
                {item.name}
              </h3>
              <p className="italic text-[18px] mt-1 opacity-80">{item.price}</p>
            </div>
          ))}
        </div>
      </main>

      <footer
        className="border-t py-10 text-center"
        style={{ borderColor: "#a9752f" }}
      >
        <div className={`${playfair.className} text-[22px] mb-2`}>
          The Barrio Café
        </div>
        <div className="text-[12px] tracking-[0.2em] uppercase opacity-60">
          © 2023 · All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
