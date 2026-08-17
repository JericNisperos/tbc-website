import { Baloo_2, Nunito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { baristaDrinks, baristaDrinkImagePath } from "@/lib/baristaDrinks";

// Style 5/5 — Playful Market Stall: rounded, pastel, sticker badges.
export const dynamic = "force-static";

const baloo = Baloo_2({ subsets: ["latin"], weight: ["600", "700", "800"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700"] });

const cardColors = ["#ffe8d6", "#cdeef0", "#fff3c4", "#ffd6e0", "#d9f0d3", "#e0d9f7"];

export default function MenuPlayfulPage() {
  return (
    <div className={`${nunito.className} min-h-screen`} style={{ backgroundColor: "#fffaf3" }}>
      <nav className="sticky top-0 z-50 bg-[#fffaf3] border-b-2 border-[#ffd6a5]">
        <div className="max-w-[1000px] mx-auto px-6 py-4 flex items-center justify-between">
          <Image src="/assets/tbc.png" alt="The Barrio Café" width={36} height={36} />
          <Link
            href="/menu"
            className="text-[13px] font-bold uppercase text-[#ff8c69] hover:opacity-70"
          >
            ← All Styles
          </Link>
        </div>
      </nav>

      <section className="max-w-[800px] mx-auto px-6 pt-16 pb-14 text-center">
        <p className="text-[14px] font-bold uppercase tracking-wide text-[#ff8c69] mb-4">
          ☕ Calm in every cup ☕
        </p>
        <h1
          className={`${baloo.className} text-[46px] md:text-[72px] leading-tight text-[#3f2f1e]`}
        >
          The Barrio Café
        </h1>
        <p className="text-[16px] max-w-lg mx-auto mt-6 opacity-75 text-[#3f2f1e]">
          Signature Filipino flavors, hand-pulled coffee, and artisanal
          refreshments served daily from our little corner of the barrio.
        </p>
      </section>

      <main className="max-w-[1000px] mx-auto px-6 pb-24">
        <header className="text-center mb-12">
          <h2 className={`${baloo.className} text-[36px] text-[#3f2f1e]`}>
            Barista Drink 🧋
          </h2>
          <p className="text-[14px] opacity-70 mt-2 text-[#3f2f1e]">
            Prices in PHP · Please inform our staff of any allergies
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {baristaDrinks.map((item, i) => (
            <div
              key={item.src}
              className="rounded-3xl p-5 flex flex-col items-center text-center"
              style={{
                backgroundColor: cardColors[i % cardColors.length],
                boxShadow: "6px 6px 0px 0px rgba(63,47,30,0.15)",
              }}
            >
              <span className="bg-white rounded-full px-3 py-1 text-[11px] font-bold uppercase text-[#ff8c69] mb-3 shadow-sm">
                {item.tag === "best seller" ? "★ Best Seller" : "👍 Must Try"}
              </span>
              <div className="relative w-full aspect-square mb-2">
                <Image
                  src={baristaDrinkImagePath(item.src)}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
              <h3 className={`${baloo.className} text-[17px] text-[#3f2f1e]`}>
                {item.name}
              </h3>
              <p className="font-bold text-[16px] text-[#3f2f1e] mt-1">{item.price}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t-2 border-[#ffd6a5] py-10 text-center">
        <div className={`${baloo.className} text-[22px] text-[#3f2f1e]`}>
          The Barrio Café
        </div>
        <div className="text-[12px] opacity-60 mt-1 text-[#3f2f1e]">
          © 2023 · All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
