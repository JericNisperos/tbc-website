import Image from "next/image";

export default function Home() {
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
              {/* <div className="flex flex-wrap gap-3 pt-2">
                <span className="font-mono text-label-caps px-3 py-1 border-2 border-primary uppercase">
                  Digital Menu
                </span>
                <span className="font-mono text-label-caps px-3 py-1 bg-primary text-on-primary uppercase">
                  Dine-In
                </span>
                <span className="font-mono text-label-caps px-3 py-1 border-2 border-primary uppercase">
                  All-Day Breakfast
                </span>
              </div> */}
            </div>
            {/* <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 shrink-0 self-center md:self-auto">
              <Image
                src="/assets/tbc.png"
                alt="The Barrio Café logo"
                fill
                sizes="(max-width: 768px) 224px, 288px"
                className="object-contain"
                priority
              />
            </div> */}
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

        {/* ——— DRINKS ——— */}

        {/* Row 1 — Coffee | Non Coffee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-6">
          <DrinkCard title="Coffee" className="h-full">
            <HotIcedTable items={COFFEE} />
          </DrinkCard>
          <DrinkCard title="Non Coffee" className="h-full">
            <IcedTable items={NON_COFFEE} />
          </DrinkCard>
        </div>

        {/* Row 2 — Matcha Series | Cream Series */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-6">
          <DrinkCard title="Matcha Series" className="h-full">
            <HotIcedTable items={MATCHA_SERIES} />
          </DrinkCard>
          <DrinkCard title="Cream Series" className="h-full">
            <IcedTable items={CREAM_SERIES} />
          </DrinkCard>
        </div>

        {/* Row 3 — Sea Salt | Barista Drink | TBC Specialty */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-6">
          <DrinkCard title="Sea Salt Series" className="h-full">
            <IcedTable items={SEA_SALT} />
          </DrinkCard>
          <DrinkCard title="Barista Drink" className="h-full">
            <IcedTable items={BARISTA} />
          </DrinkCard>
          <DrinkCard title="TBC Specialty" className="h-full" titleAccent>
            <PriceList items={TBC_SPECIALTY} bold />
          </DrinkCard>
        </div>

        {/* Row 4 — Customizable Drinks: Milk Tea + Cream Cheese + TBC Refreshment with shared Add-Ons */}
        <section className="menu-card hard-shadow-sm mb-12">
          <h3 className="font-display text-headline-md uppercase mb-2 font-bold">
            Customizable Drinks
          </h3>
          <p className="font-body text-[14px] text-on-surface-variant mb-6 border-b-2 border-primary pb-4">
            Add Pearl or Cream Cheese to any drink in this section.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-display text-headline-md uppercase mb-5 border-b-2 border-primary pb-2 font-bold">
                Milk Tea
              </h4>
              <div className="space-y-3 text-base">
                <PriceList items={MILK_TEA} />
              </div>
            </div>
            <div>
              <h4 className="font-display text-headline-md uppercase mb-5 border-b-2 border-primary pb-2 font-bold">
                Cream Cheese Series
              </h4>
              <div className="space-y-3 text-base">
                <PriceList items={CREAM_CHEESE} />
              </div>
            </div>
            <div>
              <h4 className="font-display text-headline-md uppercase mb-5 border-b-2 border-primary pb-2 font-bold">
                TBC Refreshment
              </h4>
              <div className="space-y-3 text-base">
                <PriceList items={TBC_REFRESHMENT} />
              </div>
            </div>
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
                {ADD_ONS.map(([name, price]) => (
                  <div key={name} className="flex items-baseline gap-2">
                    <span className="font-display font-semibold uppercase">
                      {name}
                    </span>
                    <span className="font-mono">+{price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ——— FOOD ——— */}
        {/* Order: Appetizer · Sandwich · Rice Meals · Pasta · Wings · All-Day Breakfast */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <Card
            title="Appetizer"
            className="h-full"
            image="/assets/images/appetizers.png"
          >
            <div className="space-y-3">
              <ItemWithDescription
                name="Fries"
                description="Cheese, BBQ, Sour Cream, Plain"
                price="110"
              />
              <ItemList items={APPETIZER_REST} />
            </div>
          </Card>

          <Card
            title="Sandwich"
            className="h-full"
            image="/assets/images/sandwiches.png"
          >
            <ItemList items={SANDWICH} />
          </Card>

          <Card
            title="Rice Meals"
            className="h-full"
            image="/assets/images/ricemeals.png"
          >
            <div className="space-y-3">
              <Item name="Bagnet Kare-Kare" price="200" />
              <Item name="Chicken Fillet" price="180" />
              <Item name="Kimchi Spam Rice" price="180" />
              <Item name="Cheesy Hungarian" price="150" />
              <Item name="Spam Nori" price="150" />
              <Item name="Pork Sisig" price="140" />
              <Item name="Creamy Burger Steak" price="150" />
            </div>
          </Card>

          <Card
            title="Pasta"
            className="h-full"
            image="/assets/images/pasta.png"
          >
            <ItemList items={PASTA} />
          </Card>

          <Card
            title="Chicken Wings"
            className="h-full"
            image="/assets/images/wings.png"
          >
            <div className="space-y-3 mb-5">
              <Item name="Wing Meal (4 pcs + Rice)" price="180" />
              <Item name="Ala Carte (6 pcs)" price="250" />
            </div>
            <div className="border-t border-primary pt-4">
              <div className="font-mono text-[12px] uppercase tracking-widest text-on-surface-variant mb-3">
                Available Flavors
              </div>
              <div className="flex flex-wrap gap-2">
                {WING_FLAVORS.map((flavor) => (
                  <span
                    key={flavor}
                    className="font-mono text-[10px] border border-outline px-2 py-0.5 uppercase tracking-widest"
                  >
                    {flavor}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          <Card
            title="All-Day Breakfast"
            className="h-full"
            image="/assets/images/breakfast.png"
          >
            <ItemList items={ALL_DAY_BREAKFAST} />
          </Card>
        </div>

        <p className="mt-10 font-mono text-[10px] text-on-surface-variant uppercase tracking-widest text-center">
          {/* Note: &quot;Einsppäner&quot; spelling preserved from physical menu. */}
        </p>
      </main>

      <footer className="bg-surface border-t-2 border-primary mt-12">
        <div className="max-w-[1100px] mx-auto px-4 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <div className="font-display text-headline-md font-bold uppercase">
              The Barrio Café
            </div>
            <div className="font-mono text-[10px] text-on-surface-variant uppercase max-w-xs tracking-widest">
              Please inform our staff of any food allergies or dietary
              restrictions before ordering.
            </div>
          </div>
          <div className="font-mono text-[10px] text-on-surface-variant tracking-widest">
            © 2023 The Barrio Café · All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}

/* ——— MENU DATA (source of truth: menu.md) ——— */

const SANDWICH = [
  ["Overload Korean Sandwich", "160"],
  ["TBC Supreme Burger", "180"],
  ["Chicken Crunch Burger", "160"],
  ["The Hungarian Bite", "140"],
];

const PASTA = [["Creamy Tuna Pasta", "180"]];

const ALL_DAY_BREAKFAST = [
  ["Hotsilog", "80"],
  ["Hamsilog", "80"],
  ["Spamsilog", "100"],
  ["Tosilog", "90"],
  ["Tapsilog", "120"],
];

const APPETIZER_REST = [
  ["Beefy Loaded Nachos", "150"],
  ["Cheesy Overload Fries", "140"],
  ["Chicken Tenders", "140"],
  ["Cheesy Chix & Fries", "140"],
  ["Street Bites Platter", "120"],
];

const WING_FLAVORS = [
  "Buffalo Wild Wings",
  "Korean BBQ Wings",
  "Golden Glazed Wings",
  "Sweet and Sour Wings",
];

const MILK_TEA = [
  ["Cookies and Cream", "80"],
  ["Dark Chocolate", "90"],
  ["Matcha", "90"],
  ["Okinawa", "80"],
  ["Taro", "80"],
  ["Red Velvet", "90"],
  ["Wintermelon", "80"],
];

const CREAM_CHEESE = [
  ["Dark Chocolate", "120"],
  ["Matcha", "120"],
  ["Okinawa", "100"],
  ["Red Velvet", "110"],
];

const TBC_REFRESHMENT = [
  ["Blueberry Bliss", "80"],
  ["Green Apple Quench", "80"],
  ["Lychee Splash", "80"],
  ["Peach Delight", "90"],
];

const ADD_ONS = [
  ["Pearl", "20"],
  ["Cream Cheese", "40"],
];

// Coffee — [name, hot, iced]; "—" = not offered
const COFFEE = [
  ["Americano", "—", "90"],
  ["Cafe Latte", "120", "120"],
  ["Spanish Latte", "130", "130"],
  ["Einsppäner Latte", "—", "160"],
  ["Dark Mocha", "—", "130"],
  ["Salted Caramel", "—", "150"],
  ["Caramel Macchiato", "—", "150"],
  ["White Mocha", "—", "130"],
  ["Biscoff Latte", "—", "150"],
  ["Oreo Latte", "—", "140"],
  ["Ube Latte", "—", "140"],
];

const MATCHA_SERIES = [
  ["Matcha Latte", "130", "130"],
  ["Einsppäner Matcha", "—", "160"],
  ["Earthy Matcha Latte", "150", "150"],
  ["Strawberry Matcha", "—", "140"],
  ["Blush Matcha", "—", "140"],
  ["Matcha Caramel", "—", "130"],
  ["Matcha Banana", "—", "160"],
  ["Matcha Oreo", "—", "130"],
  ["White Choco Matcha", "—", "130"],
  ["Ube Matcha", "—", "140"],
  ["Dirty Matcha", "—", "130"],
];

const SEA_SALT = [
  ["Sea Salt Matcha", "160"],
  ["Sea Salt Spanish Latte", "150"],
  ["Sea Salt Ube", "150"],
  ["Sea Salt Cocoa", "160"],
];

const NON_COFFEE = [
  ["Hojicha Latte", "150"],
  ["Strawberry Latte", "130"],
  ["Choco Berry", "130"],
  ["Choco Caramel", "130"],
  ["Chocolate Milk", "120"],
  ["Milo Latte", "130"],
  ["Ube Milk", "130"],
  ["Cocoa Latte", "140"],
  ["Velvet Sugar Latte", "150"],
];

const CREAM_SERIES = [
  ["Matcha Cream", "140"],
  ["Strawberry Cream", "130"],
  ["Choco Cream", "130"],
  ["Biscoff Cream", "150"],
  ["Oreo Cream", "150"],
  ["Ube Cream", "140"],
  ["Cocoa Cream", "150"],
];

const BARISTA = [
  ["TBC Signature", "150"],
  ["Sea Salt Sub-Oat", "170"],
  ["Matcha Sub-Oat", "160"],
];

const TBC_SPECIALTY = [
  ["Cocoffee", "170"],
  ["Coco-Cha", "180"],
];

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
      {items.map(([name, price]) => (
        <Item key={name} name={name} price={price} />
      ))}
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
      {items.map(([name, price]) => (
        <div
          key={name}
          className={`flex justify-between ${bold ? "font-bold" : ""}`}
        >
          <span>{name}</span>
          <span className="font-mono">{price}</span>
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
      {items.map(([name, price]) => (
        <div
          key={name}
          className="flex justify-between border-b border-dashed border-outline-variant pb-1 last:border-0"
        >
          <span>{name}</span>
          <span className="font-mono">{price}</span>
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
      {items.map(([name, hot, iced]) => (
        <div
          key={name}
          className="flex justify-between border-b border-dashed border-outline-variant pb-1 last:border-0"
        >
          <span>{name}</span>
          <div className="flex gap-6 font-mono">
            <span className="w-10 text-right">{hot}</span>
            <span className="w-10 text-right">{iced}</span>
          </div>
        </div>
      ))}
    </>
  );
}
