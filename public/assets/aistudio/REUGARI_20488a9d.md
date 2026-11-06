---
name: Modern Uzbek Heritage Luxury
colors:
  surface: '#131311'
  surface-dim: '#131311'
  surface-bright: '#3a3937'
  surface-container-lowest: '#0e0e0c'
  surface-container-low: '#1c1c1a'
  surface-container: '#20201e'
  surface-container-high: '#2a2a28'
  surface-container-highest: '#353532'
  on-surface: '#e5e2de'
  on-surface-variant: '#d0c5b6'
  inverse-surface: '#e5e2de'
  inverse-on-surface: '#31302e'
  outline: '#998f81'
  outline-variant: '#4d463a'
  surface-tint: '#e4c287'
  primary: '#e4c287'
  on-primary: '#412d01'
  primary-container: '#b99a63'
  on-primary-container: '#473204'
  inverse-primary: '#745a2a'
  secondary: '#cbc6be'
  on-secondary: '#32302b'
  secondary-container: '#4c4943'
  on-secondary-container: '#bdb8b0'
  tertiary: '#cec5b7'
  on-tertiary: '#353026'
  tertiary-container: '#a59d90'
  on-tertiary-container: '#3a352b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea7'
  primary-fixed-dim: '#e4c287'
  on-primary-fixed: '#271900'
  on-primary-fixed-variant: '#5a4314'
  secondary-fixed: '#e7e2da'
  secondary-fixed-dim: '#cbc6be'
  on-secondary-fixed: '#1d1b17'
  on-secondary-fixed-variant: '#494641'
  tertiary-fixed: '#ebe1d3'
  tertiary-fixed-dim: '#cec5b7'
  on-tertiary-fixed: '#1f1b12'
  on-tertiary-fixed-variant: '#4c463b'
  background: '#131311'
  on-background: '#e5e2de'
  surface-variant: '#353532'
typography:
  headline-xl:
    fontFamily: EB Garamond
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.01em
  headline-xl-mobile:
    fontFamily: EB Garamond
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: 0em
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 34px
    letterSpacing: 0em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0.01em
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '300'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.18em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.22em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.5rem
  space-lg: 2.5rem
  space-xl: 4rem
---

## Brand & Style

This design system expresses a refined intersection of dark luxury and timeless Central Asian heritage. Developed for high-end gastronomy, the aesthetic translates the textures of ancient Silk Road architecture—carved walnut, glazed majolica, beaten brass, and raw silk—into an avant-garde digital editorial experience.

### Core Philosophy & Visual Voice
- **Atmospheric & Intimate:** Surfaces remain deep, low-luminance, and tactile, simulating the candlelit ambiance of an exclusive courtyard evening in Tashkent.
- **Modern Heritage:** Architectural geometry inspired by Bukhara and Samarkand informs structure, grid rules, and framing, rendered strictly through minimal hairline dividers and balanced negative space rather than decorative kitsch.
- **Editorial Poise:** The layout avoids common hospitality SaaS tropes. Content behaves like a bespoke collector's monograph: intentional whitespace, disciplined hierarchy, and generous typographic tension.

## Colors

The palette establishes an opulent, nocturnal atmosphere rooted in raw earthen pigments, burnished metals, and bone parchment.

### Palette Roles
- **Base Neutral (`#171715` - Deep Charcoal):** The dominant canvas. Absorbs excess glare, providing deep immersion and high legibility for warm typography.
- **Secondary Surface (`#24221D` - Smoked Basalt):** Applied to structural panels, menus, drawers, and modal containers to create subtle architectural depth.
- **Primary Accent (`#B99A63` - Antique Gold):** Reserved for elevated actions, active states, key metadata, and artisanal framing accents. Used with restraint to maintain luxury credibility.
- **Tertiary Accent (`#383329` - Raw Umber):** Serves as a transitional boundary layer, active list hovers, and low-contrast borders.
- **Primary Ink (`#E8DDC7` - Warm Ivory):** High-readability copy tone evoking untreated silk and unglazed porcelain. Used for primary narrative text, titles, and inverted high-contrast sections.
- **Secondary Ink (`#A99A81` - Desert Dust):** Medium-contrast tone for ingredients, captions, timestamps, and secondary navigation cues.

### Light Editorial Interludes
For curated story sequences, reserve menus, or tasting notes, sections may invert to `#E8DDC7` as the background, rendering body type in `#171715` with borders in `#B99A63`.

## Typography

Typographic scale balances classical humanist serif display letterforms with hyper-rationalist, utilitarian grotesque body copy.

### Usage Standards
- **Display & Headings (EB Garamond):** Set with natural, relaxed letter-spacing. Use italic cuts selectively for culinary descriptions, provenance titles, and foreign-language menu glossary terms (e.g., *Osh Sofi*, *Kazan-Kabab*).
- **Body & Metadata (Inter):** Set light (`300`) to regular (`400`) weights to preserve airiness against dark backgrounds. Ensure letter-spacing remains slightly positive (`0.01em` to `0.02em`) to eliminate visual bleed on OLED and Retina displays.
- **Labels & Microcopy:** Render labels exclusively in uppercase with tracking between `0.18em` and `0.22em` to reflect the refined brass-plate engraving found in architectural signage.

## Layout & Spacing

The layout is built upon an asymmetrical 12-column editorial grid for desktop and tablet landscapes, folding into a focused 4-column structure on mobile devices.

### Rhythm & Composition
- **Desktop (12 Columns):** Employs generous margins (`4rem`) and structural offsets. Course listings, cellar archives, and reservation flows span intentional column splits (e.g., 5-column description paired with a 7-column architectural portrait).
- **Mobile (4 Columns):** Margins contract to `1.25rem` while internal component padding preserves vertical breathing room (`space-md`).
- **Architectural Framing:** Spacing tokens govern rhythm around thin horizontal rules and decorative architectural offsets. Sections transition through generous padding (`space-xl`) rather than high-contrast structural blocks.

## Elevation & Depth

To remain authentic to handcrafted materials, artificial drop shadows are strictly avoided. Depth is generated through layered tonality, light transparency, and razor-sharp hairline borders.

### Surface Hierarchy
1. **Canvas Layer (`#171715`):** Base underlying application surface.
2. **Elevated Surface (`#24221D`):** Reservation drawers, menu item expansion cards, and culinary modal windows.
3. **Floating Overlays:** High-transparency glass surfaces using `rgba(23, 23, 21, 0.85)` with a `16px` backdrop blur, accented by a top-edge 1px stroke of `rgba(185, 154, 99, 0.25)` to simulate candlelit brass edges.

### Hairline Architecture
Containers separate from background planes via 1px border lines in `rgba(185, 154, 99, 0.15)` or `rgba(169, 154, 129, 0.12)`. When hovered or active, borders brighten to `rgba(185, 154, 99, 0.45)`.

## Shapes

The design system adopts a crisp, non-rounded visual geometry (`roundedness: 0`). 

### Aesthetic Justification
Central Asian brickwork, carved wooden *chortoq* columns, and geometric *girih* patterns emphasize deliberate, sharp precision. All inputs, interactive buttons, modal frames, and imagery containers are finished with strict 90-degree corners.

### Micro-Accents
Corner markers inspired by Bukharan brick insets can be applied to hero images and primary cards via tiny 4px corner notches or hairline bracket borders (`border-l` / `border-t` segments in Antique Gold).

## Components

### Buttons
- **Primary Action (Reservations, Concierge):** Solid `#B99A63` background with `#171715` typography. Strict rectangular geometry, `label-md` tracking, horizontal padding of `space-lg`, and vertical padding of `space-sm`. Hover transition shifts background to `#C7AC7B` with subtle scale-free ease.
- **Secondary Action (View Menu, Cellar List):** Transparent background, 1px solid border in `rgba(185, 154, 99, 0.4)`, `#E8DDC7` typography. Hover shifts border to solid Antique Gold with a background fill of `rgba(185, 154, 99, 0.08)`.
- **Text Link:** `#B99A63` typography paired with an underline offset by `6px`, featuring a 1px solid line that expands outward on hover.

### Form Inputs & Date/Time Selectors
- **Input Fields:** Unenclosed or bottom-bordered only. Deep charcoal base with a 1px bottom border in `rgba(169, 154, 129, 0.3)`. Text renders in `#E8DDC7`. When focused, bottom border transitions to `#B99A63` with zero ring glow.
- **Labels:** Floated above input in `label-sm` style with `#A99A81`.
- **Selection States (Party Size, Seating Areas):** Rectangular tiles with 1px border. Selected state receives `#24221D` background with an antique gold border and warm ivory text.

### Menu Cards & Lists
- **Tasting Course Rows:** Structured list item with border-bottom in `rgba(169, 154, 129, 0.12)`. Course title in `headline-sm`, accompanied by dish components in `body-sm` (`#A99A81`). Pricing placed right-aligned in `label-md` Antique Gold.
- **Artifact/Wine Presentation Cards:** Aspect ratio 4:5 or 3:2 imagery, enclosed with a 1px border. Metadata sits directly below image without rounded badges.

### Chips & Tags
- Used for dietary distinctions (*Halal Certified*, *Vegetarian Tasting*, *Chef’s Table*).
- Rectangular badge, zero radius, 1px border in `rgba(185, 154, 99, 0.3)`, text in `label-sm` with `#E8DDC7`. No background fill.

### Checkboxes & Radios
- Square 14px indicators with a 1px border in `#A99A81`.
- Checked state fills the interior with an inset 6px square of `#B99A63`. Never use rounded or pill geometries.

### Culinary Vignettes (Bespoke Component)
- Distinct narrative modules pairing editorial imagery of raw ingredients (e.g., Za’atar, saffron, dry-aged mountain lamb) with poetic prose. Displayed with an offset 1px outer frame echoing traditional Uzbek courtyard alcoves (*tokcha*).