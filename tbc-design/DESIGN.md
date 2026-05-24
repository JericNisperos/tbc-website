---
name: Artisanal Bistro
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5d5f5b'
  on-secondary: '#ffffff'
  secondary-container: '#e0e0db'
  on-secondary-container: '#62635f'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#3b0900'
  on-tertiary-container: '#e1562f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e3e3de'
  secondary-fixed-dim: '#c6c7c2'
  on-secondary-fixed: '#1a1c19'
  on-secondary-fixed-variant: '#454744'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a0'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#872000'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.1em
  price-display:
    fontFamily: Space Mono
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 48px
---

## Brand & Style

This design system draws inspiration from contemporary café culture, blending the tactile warmth of hand-drawn elements with the structural clarity of modern minimalism. The brand personality is approachable, artisanal, and "perfectly imperfect." 

The visual style is a hybrid of **Minimalism** and **Brutalism**, utilizing heavy whitespace and crisp typography alongside bold, high-contrast container strokes. It aims to evoke the feeling of a local neighborhood bistro—reliable and professional, yet infused with personal, human touches through illustrative flourishes and distinctive typeface choices.

## Colors

The palette is rooted in a high-contrast monochromatic base to ensure maximum legibility and a "clean paper" feel. 

- **Primary:** A deep, near-black charcoal for all text and structural borders.
- **Secondary:** A warm, oatmeal-tinted off-white used for subtle depth and "paper-like" surfaces.
- **Tertiary:** A burnt sienna accent used sparingly for status indicators or specific calls-to-action, providing a cozy, organic pop of color.
- **Neutral:** Pure white serves as the primary background color, maintaining the clean aesthetic found in the reference material.

## Typography

The typography strategy focuses on a mix of casual, character-driven headlines and functional, professional body text.

- **Headlines:** `Bricolage Grotesque` provides a hand-drawn, slightly quirky personality that mirrors the "MENU" header in the reference images. Use it for category headers and product names.
- **Body:** `Work Sans` is utilized for descriptions and general information, offering a clean, contemporary contrast to the expressive headlines.
- **Labels & Prices:** `Space Mono` is used for technical details like prices, dietary tags, and secondary navigation, adding a modern, structured "receipt" aesthetic to the bistro theme.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model for desktop to maintain the "printed menu" feel, while transitioning to a fluid, single-column stack for mobile.

- **Desktop:** 12-column grid with a maximum container width of 1200px. Gutters are generous (24px) to prevent visual clutter.
- **Rhythm:** All vertical spacing follows an 8px baseline. Use larger 48px or 64px gaps between major food categories (e.g., "Coffee" vs "Matcha Series") to create clear visual anchors.
- **Alignment:** Left-alignment is the default for all text blocks to ensure readability, with right-aligned price values to mimic traditional menu layouts.

## Elevation & Depth

To stay true to the clean, flat aesthetic of the reference images, depth is created through **Bold Borders** and **Tonal Layers** rather than shadows.

- **Borders:** Use solid 1.5pt or 2pt black outlines for primary containers and cards. This mimics the boxed sections in the provided menu examples.
- **Layering:** Elevated content (like a "Cart" or "Notification") should use a "Hard Shadow" style: a solid black offset (e.g., 4px 4px) with no blur, creating a 2D pop-out effect.
- **Surfaces:** Use `secondary_color_hex` for "container-on-surface" elements to create a subtle distinction without breaking the minimalist white background.

## Shapes

The shape language is "Soft-Modern." While the reference menu uses some sharp corners, a slight rounding provides a more premium, digital-first feel.

- **Standard Elements:** Buttons and input fields use a `0.5rem` radius.
- **Containers:** Menu category boxes use a larger `1rem` (rounded-lg) radius to feel welcoming and friendly.
- **Images:** Food photography should always be housed in perfect circles (as seen in the "Rice Meals" reference) or with very high `1.5rem` rounding to soften the overall UI.

## Components

- **Buttons:** Primary buttons are solid black with white text in `label-caps`. Secondary buttons use a thick 2px black border and no fill.
- **Cards/Containers:** Use the "Boxed" style from the reference—white background, 2px solid black border, and 1rem corner radius. These are essential for grouping menu items.
- **Lists:** Menu items should be presented as a horizontal flex-row with the name on the left and the price on the right, connected by a subtle dotted "leader" line or generous whitespace.
- **Input Fields:** Flat white background, 2px black border. On focus, the border thickness increases to 3px or changes to the tertiary accent color.
- **Chips/Badges:** Use `Space Mono` for tags like "New," "Spicy," or "Vegan." These should be pill-shaped with a solid black fill or a light grey secondary fill.
- **Dividers:** Horizontal rules (HR) should be solid black lines, 1px thick, spanning the width of the container to separate major sections.