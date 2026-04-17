# The Overloaderr App: Planning & Baseline

## 1. Project Overview
This document serves as a baseline record of the current state of **The Overloaderr App**. It outlines the precise tech stack, color palettes, and UI structures that have been implemented so far. This provides a clean reference point for mapping out the next upgrade/update iteration.

## 2. Tech Stack & Architecture
- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **UI Animation:** Framer Motion (`framer-motion`)
- **Icons:** Lucide React (`lucide-react`)
- **Linting & Code Quality:** ESLint, Prettier
- **Testing:** Playwright setup included for E2E.

## 3. Current App Structure (Stage 1 Executed)
The core architecture currently features a two-phase state flow:
1. **Onboarding Sequence (`<OnboardingSequence />`):** Guides the user into the app mechanics.
2. **Dashboard (`<Dashboard />`):** The primary hub for user tracking and overloading actions, revealed after onboarding is completed.

## 4. Design System & Theming
The visual language is characterized by bold, unapologetic typography and high-contrast neon accents against a dark mode canvas.

### Color Palette
- **Background (Deep Space):** `#050505`
- **Primary Text:** `#ffffff`
- **Accent (Overload Green / Neon):** `#00ff41`
- **Error/Alert:** `#ff2a2a`

### Typography
- **Hero/Display Font:** `Anton`, sans-serif (Used for headers: `h1`-`h6`, buttons, capitalized)
- **Body Font:** `Outfit`, sans-serif (Used for standard text readability)

### Chunky Typography Scales (Fluid)
Implemented via CSS `clamp()` for extreme responsiveness across devices:
- **Colossal:** `clamp(4rem, 15vw, 12rem)`
- **Massive:** `clamp(3rem, 10vw, 8rem)`
- **Bulk:** `clamp(2rem, 8vw, 5rem)`
- **Header:** `clamp(1.5rem, 5vw, 3rem)`
- **Body:** `1.125rem`

### Layout Execution
- Centralized `app-container` utilizing Flexbox.
- Focused on minimalist centering, full viewport height (`min-height: 100vh`), and hiding horizontal overflow to prevent layout breaks on rapid animations.

## 5. Next Steps & Upgrades
*(To be expanded in future update phases)*
- Expand tracking logic in the Dashboard.
- Incorporate deeper analytics/history visualizations.
- Add additional physics-based spring animations to micro-interactions.
