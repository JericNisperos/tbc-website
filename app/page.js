import Image from "next/image";
import { getMenu, findSection } from "@/lib/menu";

// Menu data is mutable via the admin panel, so we render per request.
// Reads are cheap (one R2 GET, well within the free tier).
export const dynamic = "force-dynamic";

export default async function Home() {
  const menu = await getMenu();
  const drink = (id) => findSection(menu, "drinks", id);
  const food = (id) => findSection(menu, "food", id);

  const coffee = drink("coffee");
  const nonCoffee = drink("non-coffee");
  const matcha = drink("matcha-series");
  const cream = drink("cream-series");
  const seaSalt = drink("sea-salt-series");
  const barista = drink("barista-drink");
  const specialty = drink("tbc-specialty");
  const customizable = drink("customizable");

  const appetizer = food("appetizer");
  const sandwich = food("sandwich");
  const riceMeals = food("rice-meals");
  const pasta = food("pasta");
  const wings = food("chicken-wings");
  const breakfast = food("all-day-breakfast");

  // Menu shown as section images from /public/assets/images/newimages.
  const menuImages = [
    { src: "coffee.png", label: "Coffee" },
    { src: "non-coffee.png", label: "Non-Coffee" },
    { src: "matcha-series.png", label: "Matcha Series" },
    { src: "cream-series.png", label: "Cream Series" },
    { src: "seasalt-series.png", label: "Sea Salt Series" },
    { src: "barista-drink.png", label: "Barista Drink" },
    { src: "milktea.png", label: "Milk Tea" },
    { src: "cream-cheese.png", label: "Cream Cheese" },
    { src: "appetizer.png", label: "Appetizer" },
    { src: "breakfast.png", label: "All-Day Breakfast" },
    { src: "wings-meal.jpg", label: "Wings & Meals" },
  ];

  return (
    <>
      {/* Top brand bar */}
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
            <div className="font-display font-extrabold text-headline-md uppercase tracking-tight">
              {/* The Barrio Café */}
            </div>
          </div>
          <div className="font-mono text-label-caps text-on-surface-variant hidden sm:block">
            EST. 2023
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="border-b-2 border-primary">
        <div className="max-w-[1100px] mx-auto px-4 md:px-12 py-16 md:py-24">
          <div className="flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-12">
            <div className="flex flex-col gap-6 md:gap-8 flex-1 min-w-0">
              <span className="font-mono text-label-caps uppercase text-on-surface-variant">
                — Calm in every cup
              </span>
              <h1 className="font-display italic leading-[0.95] tracking-tight text-[56px] sm:text-[88px] md:text-[120px] font-extrabold">
                The Barrio
                <br />
                Café
              </h1>
              <p className="font-body text-body-lg max-w-2xl text-on-surface-variant">
                Signature Filipino flavors, hand-pulled coffee, and artisanal
                refreshments served daily from our little corner of the
                barrio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <main className="max-w-[1100px] mx-auto px-4 md:px-12 py-12 md:py-16">
        <header className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-primary pb-4">
            <div>
              <h2 className="font-display text-display-lg uppercase italic leading-tight">
                Menu
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

        {/* ——— MENU IMAGES ——— */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuImages.map(({ src, label }) => (
            <div
              key={src}
              className="relative aspect-[1415/2000] border-2 border-primary hard-shadow-sm bg-surface-container-lowest overflow-hidden"
            >
              <Image
                src={`/assets/images/newimages/${src}`}
                alt={label}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* ——— OLD TEXT MENU — hidden, kept for reference ——— */}
        {false && (
          <>
            {/* ——— DRINKS ——— */}

            {/* Row 1 — Coffee | Non Coffee */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-6">
              <DrinkCard title={coffee.title} className="h-full">
                <HotIcedTable items={coffee.items} />
              </DrinkCard>
              <DrinkCard title={nonCoffee.title} className="h-full">
                <IcedTable items={nonCoffee.items} />
              </DrinkCard>
            </div>

            {/* Row 2 — Matcha Series | Cream Series */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-6">
              <DrinkCard title={matcha.title} className="h-full">
                <HotIcedTable items={matcha.items} />
              </DrinkCard>
              <DrinkCard title={cream.title} className="h-full">
                <IcedTable items={cream.items} />
              </DrinkCard>
            </div>

            {/* Row 3 — Sea Salt | Barista Drink | TBC Specialty */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-6">
              <DrinkCard title={seaSalt.title} className="h-full">
                <IcedTable items={seaSalt.items} />
              </DrinkCard>
              <DrinkCard title={barista.title} className="h-full">
                <IcedTable items={barista.items} />
              </DrinkCard>
              <DrinkCard
                title={specialty.title}
                className="h-full"
                titleAccent={specialty.titleAccent}
              >
                <PriceList items={specialty.items} bold={specialty.bold} />
              </DrinkCard>
            </div>

            {/* Row 4 — Customizable Drinks */}
            <section className="menu-card hard-shadow-sm mb-12">
              <h3 className="font-display text-headline-md uppercase mb-2 font-bold">
                {customizable.title}
              </h3>
              <p className="font-body text-[14px] text-on-surface-variant mb-6 border-b-2 border-primary pb-4">
                {customizable.subtitle}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {customizable.subsections.map((sub) => (
                  <div key={sub.id}>
                    <h4 className="font-display text-headline-md uppercase mb-5 border-b-2 border-primary pb-2 font-bold">
                      {sub.title}
                    </h4>
                    <div className="space-y-3 text-base">
                      <PriceList items={sub.items} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 border-2 border-dashed border-primary rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="font-display text-headline-md uppercase font-bold">
                      Add-Ons
                    </div>
                    <div className="font-body text-[14px] text-on-surface-variant">
                      Available for any drink in this section
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-6 text-base">
                    {customizable.addOns.map((a) => (
                      <div key={a.name} className="flex items-baseline gap-2">
                        <span className="font-display font-semibold uppercase">
                          {a.name}
                        </span>
                        <span className="font-mono">+{a.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ——— FOOD ——— */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <Card title={breakfast.title} className="h-full" image={breakfast.image}>
                <ItemList items={breakfast.items} />
              </Card>

              <Card title={appetizer.title} className="h-full" image={appetizer.image}>
                <ItemList items={appetizer.items} />
              </Card>

              {/* <Card title={sandwich.title} className="h-full" image={sandwich.image}>
                <ItemList items={sandwich.items} />
              </Card>

              <Card title={riceMeals.title} className="h-full" image={riceMeals.image}>
                <ItemList items={riceMeals.items} />
              </Card>



              <Card title={pasta.title} className="h-full" image={pasta.image}>
                <ItemList items={pasta.items} />
              </Card> */}


              <Card title={wings.title} className="h-full" image={wings.image}>
                <div className="space-y-3 mb-5">
                  {wings.items.map((it) => (
                    <Item key={it.name} name={it.name} price={it.price} />
                  ))}
                </div>
                {wings.flavors?.length > 0 && (
                  <div className="border-t border-primary pt-4">
                    <div className="font-mono text-[12px] uppercase tracking-widest text-on-surface-variant mb-3">
                      Available Flavors
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {wings.flavors.map((flavor) => (
                        <span
                          key={flavor}
                          className="font-mono text-[10px] border border-outline px-2 py-0.5 uppercase tracking-widest"
                        >
                          {flavor}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>


            </div>
          </>
        )}
      </main>

      <footer className="bg-surface border-t-2 border-primary mt-12">
        <div className="max-w-[1100px] mx-auto px-4 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <div className="font-display text-headline-md font-bold uppercase">
              The Barrio Café
            </div>
            {/* <div className="font-mono text-[10px] text-on-surface-variant uppercase max-w-xs tracking-widest">
              Please inform our staff of any food allergies or dietary
              restrictions before ordering.
            </div> */}
          </div>
          <div className="font-mono text-[10px] text-on-surface-variant tracking-widest">
            © 2023 The Barrio Café · All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}

/* ——— Building blocks ——— */

function Card({ title, children, className = "", image }) {
  return (
    <section
      className={`menu-card hard-shadow-sm overflow-hidden ${className}`}
    >
      {image && (
        <div className="-mx-6 -mt-6 mb-6 relative aspect-[4/3] border-b-2 border-primary bg-surface-container-lowest">
          <div className="absolute inset-3">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      )}
      <h2 className="font-display text-headline-md uppercase mb-6 border-b-2 border-primary pb-2 font-bold">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ItemList({ items }) {
  return (
    <div className="space-y-3">
      {items.map((it) =>
        it.description ? (
          <ItemWithDescription
            key={it.name}
            name={it.name}
            description={it.description}
            price={it.price}
          />
        ) : (
          <Item key={it.name} name={it.name} price={it.price} />
        ),
      )}
    </div>
  );
}

function Item({ name, price, accent = false }) {
  return (
    <div className="flex items-end">
      <span
        className={`font-display text-[18px] uppercase font-semibold ${accent ? "text-tertiary" : ""
          }`}
      >
        {name}
      </span>
      <div className="dotted-leader" />
      <span className="font-mono text-price">{price}</span>
    </div>
  );
}

function ItemWithDescription({ name, description, price }) {
  return (
    <div className="flex items-start">
      <div className="flex flex-col">
        <span className="font-display text-[18px] uppercase font-semibold">
          {name}
        </span>
        <span className="font-body text-[12px] text-on-surface-variant">
          {description}
        </span>
      </div>
      <div className="flex flex-grow items-end h-6 px-2">
        <div className="dotted-leader !mb-0" />
      </div>
      <span className="font-mono text-price pt-1">{price}</span>
    </div>
  );
}

function DrinkCard({ title, children, className = "", titleAccent = false }) {
  return (
    <section className={`menu-card hard-shadow-sm ${className}`}>
      <h3
        className={`font-display text-headline-md uppercase mb-6 border-b-2 border-primary pb-2 font-bold ${titleAccent ? "text-tertiary" : ""
          }`}
      >
        {title}
      </h3>
      <div className="space-y-3 text-base">{children}</div>
    </section>
  );
}

function PriceList({ items, bold = false }) {
  return (
    <>
      {items.map((it) => (
        <div
          key={it.name}
          className={`flex justify-between ${bold ? "font-bold" : ""}`}
        >
          <span>{it.name}</span>
          <span className="font-mono">{it.price}</span>
        </div>
      ))}
    </>
  );
}

function IcedTable({ items }) {
  return (
    <>
      <div className="flex justify-between font-mono text-[12px] uppercase tracking-widest text-on-surface-variant mb-2">
        <span className="invisible">Item</span>
        <span>Iced</span>
      </div>
      {items.map((it) => (
        <div
          key={it.name}
          className="flex justify-between border-b border-dashed border-outline-variant pb-1 last:border-0"
        >
          <span>{it.name}</span>
          <span className="font-mono">{it.price}</span>
        </div>
      ))}
    </>
  );
}

function HotIcedTable({ items }) {
  return (
    <>
      <div className="flex justify-between font-mono text-[12px] uppercase tracking-widest text-on-surface-variant mb-2">
        <span className="invisible">Item</span>
        <div className="flex gap-6">
          <span className="w-10 text-right">Hot</span>
          <span className="w-10 text-right">Iced</span>
        </div>
      </div>
      {items.map((it) => (
        <div
          key={it.name}
          className="flex justify-between border-b border-dashed border-outline-variant pb-1 last:border-0"
        >
          <span>{it.name}</span>
          <div className="flex gap-6 font-mono">
            <span className="w-10 text-right">{it.hot}</span>
            <span className="w-10 text-right">{it.iced}</span>
          </div>
        </div>
      ))}
    </>
  );
}
