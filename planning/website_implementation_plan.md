# The Overloaderr App Website: Execution Blueprint & Checklist

Provide a transparent, rigorous process for building the Overloaderr landing page based on the established brand identity and technical requirements list. 

## Focus Context
⚠️ **Note:** This document applies *exclusively* to the rapid development of the static, React-based marketing website (`overloaderr-web`). The iOS application itself is entirely out of scope for this build process.

---

## 1. Asset Pipeline & Optimization (Current Stage)
Before dropping images into the website, the raw assets provided must be sanitized for production.
- [ ] Sweep the `public/assets` directory.
- [ ] Flatten the directory schema and rename all generic files (`1.png`, `2.png`) to semantic, predictable names (e.g., `iphone-ui-dashboard.png`, `marketing-banner-hero.png`).
- [ ] **Technical Requirement:** As per Step 1.4 of the handoff, all massive PNG assets will be compressed and converted to `WebP` using a lightweight command-line engine (like `cwebp`) or basic structural renaming to ensure maximum site speed on GitHub pages.

## 2. Core UI Infrastructure Setup (Completed & Ongoing)
- [x] Initialized the Vite/React/TS environment.
- [x] Bootstrapped the baseline CSS properties, fluid layout clamps, and void-black color scheme.
- [x] Verified GitHub Pages Automated Deployment Pipeline works out of the box using relative bases (`base: './'`).

## 3. Structural Component Engineering
*The phase where we construct the React modules.*
- [ ] **Layout Core:** `Header`, `HeroSection`, `Footer`.
- [ ] **Primitive Elements:** Pill-shaped Gradient Buttons (`ButtonOverload`), Section Headers.
- [ ] **Cards:** Feature breakdown cards and Subscription/Paywall display cards.
- [ ] **Mockup Containment:** Create a generic `DeviceFrame` component that accurately restricts the rectangular screenshots behind transparent iPhone frames using precise CSS layers.

## 4. Animation & Physics System
*Assembling the mechanical, aggressive feel for interactions.*
- [ ] Connect the `IntersectionObserver` across major `<Section>` blocks.
- [ ] Execute the "Glitch/Slam Reveal" on the primary hero headline.
- [ ] Map the continuous, subtle `float` keyframe to the primary mockups to give them depth.

## 5. Compliance & Static Routing
*The final pre-flight checks required to ensure Apple Developer Review goes flawlessly.*
- [ ] Draft the pure-text `Privacy Policy` page.
- [ ] Draft the `Terms & Conditions (EULA)` page.
- [ ] Construct the support/mailto endpoint.
- [ ] Restrict horizontal overflow across the entire body to ensure no x-axis scrolling occurs on mobile devices.

## Open Questions for User
> [!IMPORTANT]
> The screenshots you drag-and-dropped are currently heavy unoptimized `.png` files. I am going to run an automated conversion and rename sequence to turn them all into highly optimized `.webp` files with semantic names (like `iphone-screen-1.webp`). Are you okay with me destroying the old folders/PNGs down to just the clean WebP files to save repository space?

## Verification Plan
1. Check the local `npm run dev` to ensure images render perfectly with the new lightweight names.
2. Ensure GitHub Actions passes and the live site successfully points to `domain.com/assets/...` instead of failing paths.
