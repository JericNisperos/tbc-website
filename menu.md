# The Barrio Café — Menu

Source: physical menu photos in `public/assets/` (`sandwich.jpg`, `appetizer.jpg`, `milktea.jpg`, `drinks.jpg`).
All prices in PHP. Item names and spellings are preserved exactly as printed on the source menu.

---

## Food

### Sandwich
*(source: `sandwich.jpg`)*

| Item | Price |
|---|---|
| Overload Korean Sandwich | 160 |
| TBC Supreme Burger | 180 |
| Chicken Crunch Burger | 160 |
| The Hungarian Bite | 140 |

### Pasta
*(source: `sandwich.jpg`)*

| Item | Price |
|---|---|
| Creamy Tuna Pasta | 180 |

### All-Day Breakfast
*(source: `sandwich.jpg`)*

| Item | Price |
|---|---|
| Hotsilog | 80 |
| Hamsilog | 80 |
| Spamsilog | 100 |
| Tosilog | 90 |
| Tapsilog | 120 |

### Appetizer
*(source: `appetizer.jpg`)*

| Item | Price |
|---|---|
| Fries — *cheese, bbq, sour cream, plain* | 110 |
| Beefy Loaded Nachos | 150 |
| Cheesy Overload Fries | 140 |
| Chicken Tenders | 140 |
| Cheesy Chix & Fries | 140 |
| Street Bites Platter | 120 |

### Rice Meals
*(source: `appetizer.png` — updated prices)*

| Item | Price |
|---|---|
| Bagnet Kare-Kare | 200 |
| Chicken Fillet | 180 |
| Kimchi Spam Rice | 180 |
| Cheesy Hungarian | 150 |
| Spam Nori | 150 |
| Pork Sisig | 140 |
| Creamy Burger Steak | 150 |

### Chicken Wings
*(source: `appetizer.png` — updated prices)*

| Item | Price |
|---|---|
| Wing Meal (4 pcs + Rice) | 180 |
| Ala Carte (6 pcs) | 250 |

**Wing flavors** (applies to Wing Meal):
- Buffalo Wild Wings
- Korean BBQ Wings
- Golden Glazed Wings
- Sweet and Sour Wings

---

## Drinks

### Milk Tea
*(source: `milktea.jpg`)*

| Item | Price |
|---|---|
| Cookies and Cream | 80 |
| Dark Chocolate | 90 |
| Matcha | 90 |
| Okinawa | 80 |
| Taro | 80 |
| Red Velvet | 90 |
| Wintermelon | 80 |

### Cream Cheese Series
*(source: `milktea.jpg`)*

| Item | Price |
|---|---|
| Dark Chocolate | 120 |
| Matcha | 120 |
| Okinawa | 100 |
| Red Velvet | 110 |

### TBC Refreshment
*(source: `milktea.jpg`)*

| Item | Price |
|---|---|
| Blueberry Bliss | 80 |
| Green Apple Quench | 80 |
| Lychee Splash | 80 |
| Peach Delight | 90 |

**Add-Ons:**

| Add-On | Price |
|---|---|
| Pearl | 20 |
| Cream Cheese | 40 |

### Coffee
*(source: `drinks.png` — updated prices)*

| Item | Hot | Iced |
|---|---|---|
| Americano | — | 90 |
| Cafe Latte | 120 | 120 |
| Spanish Latte | 130 | 130 |
| Einsppäner Latte | — | 160 |
| Dark Mocha | — | 130 |
| Salted Caramel | — | 150 |
| Caramel Macchiato | — | 150 |
| White Mocha | — | 130 |
| Biscoff Latte | — | 150 |
| Oreo Latte | — | 140 |
| Ube Latte | — | 140 |

> Note: source menu spells it "EINSPPÄNER" (double P). Standard German spelling is "Einspänner" — preserved as-printed.

### Matcha Series
*(source: `drinks.png` — updated prices)*

| Item | Hot | Iced |
|---|---|---|
| Matcha Latte | 130 | 130 |
| Einsppäner Matcha | — | 160 |
| Earthy Matcha Latte | 150 | 150 |
| Strawberry Matcha | — | 140 |
| Blush Matcha | — | 140 |
| Matcha Caramel | — | 130 |
| Matcha Banana | — | 160 |
| Matcha Oreo | — | 130 |
| White Choco Matcha | — | 130 |
| Ube Matcha | — | 140 |
| Dirty Matcha | — | 130 |

### Sea Salt Series
*(source: `drinks.png` — updated prices, iced only)*

| Item | Iced |
|---|---|
| Sea Salt Matcha | 160 |
| Sea Salt Spanish Latte | 150 |
| Sea Salt Ube | 150 |
| Sea Salt Cocoa | 160 |

### Non Coffee
*(source: `drinks.png` — updated prices, iced only)*

| Item | Iced |
|---|---|
| Hojicha Latte | 150 |
| Strawberry Latte | 130 |
| Choco Berry | 130 |
| Choco Caramel | 130 |
| Chocolate Milk | 120 |
| Milo Latte | 130 |
| Ube Milk | 130 |
| Cocoa Latte | 140 |
| Velvet Sugar Latte | 150 |

### Cream Series
*(source: `drinks.png` — updated prices, iced only)*

| Item | Iced |
|---|---|
| Matcha Cream | 140 |
| Strawberry Cream | 130 |
| Choco Cream | 130 |
| Biscoff Cream | 150 |
| Oreo Cream | 150 |
| Ube Cream | 140 |
| Cocoa Cream | 150 |

### Barista Drink
*(source: `drinks.png` — updated prices, iced only)*

| Item | Iced |
|---|---|
| TBC Signature | 150 |
| Sea Salt Sub-Oat | 170 |
| Matcha Sub-Oat | 160 |

### TBC Specialty
*(source: `drinks.jpg`)*

| Item | Price |
|---|---|
| Cocoffee | 170 |
| Coco-Cha | 180 |

---

## Summary

- **Food categories:** 6 (Sandwich, Pasta, All-Day Breakfast, Appetizer, Rice Meals, Chicken Wings)
- **Drink categories:** 10 (Milk Tea, Cream Cheese Series, TBC Refreshment, Coffee, Matcha Series, Sea Salt Series, Non Coffee, Cream Series, Barista Drink, TBC Specialty)
- **Total unique items:** 71 (excluding add-ons and wing flavors)
- **Add-ons:** 2 (Pearl, Cream Cheese)

## Discrepancies vs current `app/page.js`

Items the current rendered page is **missing or different** from the source menu:

- **Coffee** is missing: Salted Caramel (130 iced), White Mocha (120 iced), Oreo Latte (130 iced), Ube Latte (130 iced). Current page uses "Einspänner" (single P) — source says "Einsppäner".
- **Matcha Series** is missing: Strawberry Matcha (130), Matcha Caramel (130), Matcha Banana (160), Matcha Oreo (130), White Choco Matcha (120), Ube Matcha (130). Current page also contains an item "Einspänner Matcha" — source spelling is "Einsppäner Matcha". Current page's "Matcha Latte" is shown at 120 (iced only); source has Hot 120 / Iced 120.
- **Sea Salt Series** is missing **Sea Salt Ube (140)**.
- **Non Coffee** is missing: Strawberry Latte (130), Choco Caramel (130), Chocolate Milk (120), Cocoa Latte (140), Velvet Sugar Latte (150).
- **Cream Series** is entirely missing from the current page (7 items).
- **TBC Specialty** is missing **Coco-Cha (180)**. Current page lists "Cocoffee" inside "Barista Drinks"; source puts it under its own "TBC Specialty" category.
- **TBC Refreshment** — current page labels the section "Refreshments" and folds Add-Ons inline; source names it "TBC Refreshment" with Add-Ons as a separate sub-section.
- **Chicken Wings** flavor names: source uses "Buffalo Wild Wings / Korean BBQ Wings / Golden Glazed Wings / Sweet and Sour Wings" (each suffixed "Wings"); current page shows "Buffalo Wild / Korean BBQ / Golden Glazed / Sweet & Sour".
