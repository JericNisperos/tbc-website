import { Fraunces, Caveat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { baristaDrinks, baristaDrinkImagePath } from "@/lib/baristaDrinks";

// Style 3/5 — Rustic Provincial (bahay-kubo market stall): kraft paper, hand-tag labels.
export const dynamic = "force-static";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "700"] });

const rotations = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1", "-rotate-1", "rotate-1"];

export default function MenuRusticPage() {
  return (
    <div
      className={`${fraunces.className} min-h-screen`}
      style={{
        backgroundColor: "#e9dab8",
        backgroundImage:
          "radial-gradient(#d9c398 1px, transparent 1px), radial-gradient(#d9c398 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        backgroundPosition: "0 0, 12px 12px",
        color: "#3f2f1e",
      }}
    >
      <nav
        className="sticky top-0 z-50 border-b-4 border-dashed"
        style={{ backgroundColor: "#e9dab8", borderColor: "#5c4a30" }}
      >
        <div className="max-w-[1000px] mx-auto px-6 py-5 flex items-center justify-between">
          <Image src="/assets/tbc.png" alt="The Barrio Café" width={38} height={38} />
          <Link
            href="/menu"
            className={`${caveat.className} text-[20px]`}
            style={{ color: "#5c4a30" }}
          >
            ← back to all styles
          </Link>
        </div>
      </nav>

      <section className="max-w-[900px] mx-auto px-6 pt-16 pb-14 text-center">
        <p className={`${caveat.className} text-[26px]`} style={{ color: "#7a5a2f" }}>
          ~ calm in every cup, straight from the barrio ~
        </p>
        <h1 className="italic font-bold text-[48px] md:text-[76px] leading-[1.05] mt-2">
          The Barrio Café
        </h1>
        <p className="text-[18px] max-w-xl mx-auto mt-6 opacity-80">
          Signature Filipino flavors, hand-pulled coffee, and artisanal
          refreshments served daily from our little corner of the barrio.
        </p>
      </section>

      <main className="max-w-[1000px] mx-auto px-6 pb-24">
        <header className="text-center mb-12">
          <h2 className="italic font-bold text-[38px]" style={{ color: "#3f5c3f" }}>
            Barista Drink
          </h2>
          <p className="text-[14px] opacity-70 mt-1">
            Prices in PHP · Please inform our staff of any allergies
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {baristaDrinks.map((item, i) => (
            <div
              key={item.src}
              className={`${rotations[i % rotations.length]} rounded-lg p-5 border-4 border-dashed shadow-md`}
              style={{ backgroundColor: "#fbf3e1", borderColor: "#b5651d" }}
            >
              <span
                className={`${caveat.className} inline-block text-[18px] mb-2 px-3 py-0.5 rounded-full border-2`}
                style={{ borderColor: "#3f5c3f", color: "#3f5c3f" }}
              >
                {item.tag}
              </span>
              <div className="relative aspect-square mb-3">
                <Image
                  src={baristaDrinkImagePath(item.src)}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-[19px] text-center">{item.name}</h3>
              <p
                className={`${caveat.className} text-center text-[24px] mt-1`}
                style={{ color: "#b5651d" }}
              >
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer
        className="border-t-4 border-dashed py-10 text-center"
        style={{ borderColor: "#5c4a30" }}
      >
        <div className="font-bold text-[22px] italic">The Barrio Café</div>
        <div className={`${caveat.className} text-[16px] opacity-70 mt-1`}>
          © 2023 — made with care in the barrio
        </div>
      </footer>
    </div>
  );
}
