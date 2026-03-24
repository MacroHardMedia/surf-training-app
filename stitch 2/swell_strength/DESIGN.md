This document currently contains no design system narrative. Please add content to this file to describe your design system.# Design System Strategy: The Fluid Athlete

## 1. Overview & Creative North Star

The Creative North Star for this design system is **"The Kinetic Horizon."**

Unlike traditional fitness apps that rely on static, boxed-in grids, this system mimics the fluid motion of the ocean and the explosive energy of a surfer. We move beyond "standard" UI by embracing **Intentional Asymmetry** and **Atmospheric Depth**. By layering semi-transparent surfaces and utilizing high-contrast editorial typography, we create an experience that feels as premium as a high-end surf film and as functional as a professional training tool.

The design breaks the "template" look by allowing imagery to bleed into the UI, using overlapping elements to create a sense of forward momentum, and ditching rigid borders for soft, tonal transitions.

---

## 2. Colors & Surface Philosophy

Our palette is a deep-dive into the Pacific. We use high-chroma accents to punctuate action and deep, dark surfaces to provide a sophisticated, professional backdrop.

### The "No-Line" Rule

**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be defined exclusively through background color shifts. For example, a workout module (`surface-container-low`) should sit directly on the `background` without a stroke. Use the `0.5 (0.175rem)` or `1 (0.35rem)` spacing tokens to create breathing room between these shifts.

### Surface Hierarchy & Nesting

Treat the UI as a series of physical layers of sea-glass.

- **Base:** `surface` (#060e20) for the deepest ocean feel.
- **Secondary Sections:** Use `surface-container-low` to create a subtle lift for content groups.
- **Interactive Cards:** Use `surface-container-highest` or `surface-bright` to draw the eye to primary actions.
- **Nesting:** Place a `surface-container-lowest` card inside a `surface-container-low` section to create "negative depth," making the card feel like a carved-out, focused space.

### The "Glass & Gradient" Rule

To capture the "refreshing" surf vibe, use Glassmorphism for floating navigation bars or overlaying stats.

- **Formula:** Apply `surface-variant` at 40% opacity with a `24px` backdrop blur.
- **Signature Textures:** For Primary CTAs, do not use flat hex codes. Apply a linear gradient from `primary` (#52f2f5) to `primary-container` (#0cd0d3) at a 135-degree angle to simulate the shimmer of water.

---

## 3. Typography: Editorial Athletics

We use a dual-typeface system to balance high-energy motivation with elite legibility.

- **Display & Headlines (Lexend):** This is our "Voice." Lexend’s geometric clarity feels modern and athletic. Use `display-lg` for daily goals and `headline-lg` for workout titles. The wide apertures reflect the openness of the coast.
- **Body & Labels (Manrope):** This is our "Engine." Manrope is highly legible during intense movement. Use `body-lg` for exercise instructions and `label-md` for technical data (reps, sets, heart rate).
- **Hierarchy Tip:** Pair a `display-sm` headline in `primary` with a `label-md` in `on-surface-variant` (all caps) to create a premium, editorial "magazine" look.

---

## 4. Elevation & Depth

In this system, "shadows" are atmospheric, not structural.

- **The Layering Principle:** Avoid the "pasted-on" look. Depth is achieved by stacking the surface tokens. A `surface-container-highest` element on a `surface` background provides all the "lift" required for a high-end feel.
- **Ambient Shadows:** For "Floating" elements (like a Start Workout button), use a shadow with a 40px blur at 6% opacity, tinted with `primary_dim`. This simulates light refracting through water.
- **The "Ghost Border" Fallback:** If accessibility requires a container edge, use the `outline-variant` token at **15% opacity**. Never use 100% opaque lines.
- **Motion Depth:** When a user scrolls, use backdrop blurs on headers to let the "energy" of the background imagery bleed through, maintaining the high-energy coastal vibe.

---

## 5. Components

### Primary Buttons

- **Style:** Gradient fill (`primary` to `primary-container`).
- **Shape:** `xl` (1.5rem) rounded corners for a soft, ergonomic feel.
- **State:** On press, scale down to 96% to provide tactile, "springy" feedback.

### Training Cards

- **Style:** No borders. Use `surface-container-high` with a high-quality surfer image background.
- **Glass Overlay:** Use a bottom-aligned glass section (`surface-variant` @ 50% + blur) to house the workout title and duration.
- **Spacing:** Use `3 (1rem)` internal padding from the spacing scale.

### Performance Chips

- **Style:** `surface-container-highest` background with `on-surface` text.
- **Shape:** `full` (9999px) for a "pill" look that feels fast and aerodynamic.

### Progress Inputs & Fields

- **Style:** `surface-container-low` fill.
- **Focus:** Instead of a border, use a 2px `primary` underline or a subtle glow effect using the `primary_dim` token.
- **Spacing:** Never use divider lines in lists. Use `5 (1.7rem)` spacing to separate list items.

### Specialist Component: The "Waveform" Progress Bar

- **Description:** A custom progress indicator for workout duration. Instead of a flat bar, use a sine-wave path using the `tertiary` (#ff946e) color to represent the "energy" of the set.

---

## 6. Do's and Don'ts

### Do:

- **DO** use asymmetric imagery. Let a surfer's surfboard "break" the container of a card to create 3D depth.
- **DO** use `tertiary` (#ff946e) sparingly for high-alert data or "Personal Best" celebrations.
- **DO** leave significant "Air" (white space). High-end design breathes. Use `12 (4rem)` spacing between major sections.

### Don't:

- **DON'T** use pure black (#000000). Always use `surface` (#060e20) to maintain the deep-sea tonal quality.
- **DON'T** use 1px dividers. They clutter the UI and make it look like a generic bootstrap template.
- **DON'T** use sharp 0px corners. This is an organic, fluid brand. Minimum roundedness is `sm (0.25rem)`, but `lg` and `xl` are preferred.
