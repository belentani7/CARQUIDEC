# UNIVERSAL PREMIUM WEB SPECIFICATION - CARQUIDEC EDITION
# 100 Criteria from World Top 50 Sites to 2000 Rules to 200 Dense Lines
# Source: Awwwards Site of Year, CSS Design Awards, FWA, Red Dot, Typewolf, Behance Best
# Validated against: Apple, Airbnb, Stripe, Linear, Notion, Vercel, Framer, Rive, Spline, Dieter Rams

## CORE PHILOSOPHY (Lines 1-10)
1. ONE PURPOSE PER SCREEN - Cognitive load 7plusmn2 elements (Millers Law)
2. ZERO DECORATION - Every pixel earns its keep; ornament is crime (Rams)
3. CONTENT FIRST CHROME LAST - Structure > style > motion > delight
4. SYSTEM OVER PAGES - Design tokens to components to patterns to templates to pages
5. PERFORMANCE IS FEATURE 1 - <100ms TTFB <2.5s LCP <100ms INP 0 CLS
6. ACCESSIBILITY IS NOT OPTIONAL - WCAG 2.2 AA baseline AAA for text
7. MOTION WITH MEANING - Reduce motion respected; prefers-reduced-motion honored
8. TOUCH = MOUSE = KEYBOARD = VOICE - Multi-modal parity
9. PROGRESSIVE ENHANCEMENT - Works without JS better with it
10. MEASURE EVERYTHING - Real User Monitoring (RUM) + Synthetic + Lab

## DESIGN TOKENS & THEMING (Lines 11-25)
11. PRIMITIVE TOKENS - Color (OKLCH) spacing (8px base) typography (modular scale) radius shadow z-index timing easing
12. SEMANTIC TOKENS - Alias primitives: --color-bg --color-fg --color-muted --color-accent --color-border --color-focus
13. COMPONENT TOKENS - Per-component overrides: --btn-padding --card-radius --input-border
14. THEME CONTRACT - Light/dark/high-contrast via CSS custom properties; no hardcoded values
15. COLOR SYSTEM - 12-step scales per hue (50-950); semantic pairs share chroma/lightness; max 2 accent hues
16. TYPOGRAPHY SCALE - 12-step modular scale (1.25 major third); fluid clamp(1rem 2vw + 1rem 2rem)
17. SPACING SYSTEM - 4px base unit; 0 1 2 3 4 5 6 8 10 12 16 20 24 32 40 48 64 80 96 128
18. SHADOW SYSTEM - 5 elevations: surface raised overlay modal toast; consistent light source
19. RADIUS SYSTEM - 4 steps: none sm (4px) md (8px) lg (16px) full (9999px)
20. Z-INDEX CONTRACT - 0 base 10 dropdown 100 sticky 200 modal 300 toast 400 tooltip 500 loading
21. MOTION TOKENS - Duration: instant (0) fast (150ms) normal (250ms) slow (350ms) slower (500ms); Easing: standard emphasized decelerated
22. BREAKPOINT CONTRACT - Mobile-first: 320 480 640 768 1024 1280 1536; container queries preferred
23. ICON SYSTEM - 24x24px viewBox; stroke 2px; consistent weight; semantic naming
24. BORDER SYSTEM - 1px base; focus 2px; error 2px; semantic colors
25. GRID SYSTEM - 12-col fluid; 24px gutter; 8px baseline grid alignment

## ARCHITECTURE & COMPONENTS (Lines 26-50)
26. ATOMIC COMPONENTS - Button Input Label Icon Badge Avatar Tooltip Dropdown Modal Toast Tabs Accordion Table Card List Grid Form Navigation Footer Header Hero Section Container SkipLink FocusTrap Portal VisuallyHidden
27. COMPOUND PATTERNS - Hero FeatureGrid TestimonialCarousel PricingTable ContactForm ProjectGallery Timeline StatsCounter LogoCloud FAQ Breadcrumbs Pagination Search Filter Sort DataTable TreeView Wizard Stepper Onboarding
28. LAYOUT PRIMITIVES - Stack Inline Cluster Grid Sidebar Cover Frame Reel Imposter Switcher AutoGrid FlexGroup
29. STATE MACHINES - Every interactive component: idle to hover to focus to active to disabled to loading to error to success
30. VARIANT SYSTEM - Size (sm/md/lg) Tone (primary/secondary/ghost/danger) Shape (pill/rounded/sharp) State
31. COMPOSITION OVER INHERITANCE - Slots > props; render props > HOC; compound components > monolithic
32. CSS-FIRST STYLING - Zero-runtime (CSS Modules Tailwind Panda Vanilla Extract); no emotion/styled-components
33. CONTAINER QUERIES - Components own their responsive logic; @container not @media
34. CSS LAYERS - @layer reset tokens base components patterns utilities overrides
35. SCOPED STYLES - Shadow DOM or CSS Modules; zero global leakage
36. THEME PROVIDER - React Context + CSS vars; no prop drilling; SSR-compatible
37. RESPONSIVE IMAGES - <picture> with AVIF/WebP/JPEG; srcset + sizes; LQIP blur placeholder
38. FONT LOADING - preload critical; font-display: swap; subset; variable fonts; fallback metrics override
39. ICON DELIVERY - Inline SVG sprite; <use href=#icon>; no font icons
40. ASSET PIPELINE - Content-hashed; immutable cache; Brotli/Zstd; CDN edge

## INTERACTION & MOTION (Lines 51-75)
41. SCROLL-DRIVEN ANIMATIONS - ScrollTimeline + AnimationTimeline; no scroll listeners
42. VIEW TRANSITIONS - SPA-like transitions for MPA; ::view-transition-old/new
43. INTERSECTION OBSERVER - Reveal lazy-load analytics; rootMargin tuned per element
44. LENIS SMOOTH SCROLL - Optional; respects prefers-reduced-motion; no scroll-jacking
45. GSAP FOR COMPLEX - Only when WAAPI insufficient; ScrollTrigger for scrub/pin
46. MICRO-INTERACTIONS - Hover lift (2px) focus ring (2px offset) press scale (0.98) loading shimmer
47. PAGE TRANSITIONS - Barba.js or View Transitions API; 300ms max; maintain scroll position
48. CURSOR - Custom only on desktop; mix-blend-mode: difference; hides on touch
49. PARTICLES/CANVAS - Off-main-thread (OffscreenCanvas/Web Worker); paused when hidden
50. 3D/WEBGL - Three.js/R3F/Babylon; lazy-loaded; fallback static image; <100KB gzipped
51. AUDIO - User gesture required; Web Audio API; respect autoplay policy; mute default
52. VIDEO - autoplay muted playsinline; poster; preload=metadata; WebM/AV1 + MP4 fallback
53. DRAG & DROP - Native HTML5 + SortableJS; keyboard alternative (Space/Enter + arrows)
54. VIRTUALIZATION - TanStack Virtual / react-window; 100+ items threshold
55. INFINITE SCROLL - IntersectionObserver + AbortController; Load More fallback
56. SEARCH - Debounced (300ms); server-side; highlighted results; keyboard nav
57. FILTERS - URL-synced (nuqs); shareable state; SSR-compatible
58. FORMS - React Hook Form + Zod; uncontrolled inputs; native validation first
59. ERROR HANDLING - Inline field errors; toast for global; retry with exponential backoff
60. LOADING STATES - Skeleton > spinner; progressive hydration; streaming SSR

## PERFORMANCE BUDGET (Lines 76-90)
61. BUNDLE BUDGET - <50KB JS gzipped initial; <150KB total; code-split by route
62. CSS BUDGET - <15KB critical inline; rest async; purge unused
63. FONT BUDGET - <50KB variable font; subset latin + latin-ext
64. IMAGE BUDGET - Hero <100KB; gallery <50KB each; AVIF 30% smaller than WebP
65. THIRD-PARTY - Zero blocking; facade pattern for chat/maps/analytics; consent-first
66. CACHING - Immutable assets (1yr); HTML no-cache; API stale-while-revalidate
67. PREFETCH - hover/visible viewport; Speculation Rules API; quicklink
68. STREAMING - React 18 Suspense + streaming SSR; shell + islands
69. EDGE - Workers for auth i18n A/B personalization; <50ms overhead
70. OBSERVABILITY - Web Vitals + custom marks/measures; Sentry + Vercel Analytics

## ACCESSIBILITY CONTRACT (Lines 91-110)
71. SEMANTIC HTML - One h1; landmark regions; proper heading hierarchy; lists for groups
72. COLOR CONTRAST - 4.5:1 text 3:1 large text/UI; 7:1 AAA for body
73. FOCUS VISIBLE - :focus-visible ring 2px solid --color-focus offset 2px; never outline: none
74. SKIP LINKS - First focusable; visible on focus; jumps to main
75. ARIA - Only when HTML insufficient; live regions for dynamic content; labels on all inputs
76. REDUCED MOTION - @media (prefers-reduced-motion) disables all non-essential animation
77. HIGH CONTRAST - @media (prefers-contrast: more) boosts borders/focus
78. ZOOM - Works at 400% zoom; no horizontal scroll; text wraps
79. SCREEN READER - Tested NVDA/JAWS/VoiceOver; logical tab order; no traps
80. KEYBOARD - All interactive reachable; Escape closes modals; arrows in composites
81. TOUCH TARGETS - 44x44px minimum; 8px spacing between
82. LANGUAGE - lang attribute; lang changes announced; RTL support
83. TIMEOUTS - Extendable; warning before expiry; no content loss
84. ERROR RECOVERY - Clear message; suggestion; link to help; preserve input
85. STATUS MESSAGES - role=status or aria-live=polite for non-critical

## CONTENT & NARRATIVE (Lines 111-130)
86. VOICE & TONE - Architectural authority; poetic precision; zero fluff; second-person for CTAs
87. INFORMATION ARCHITECTURE - User mental model > org chart; card sort validated
88. CONTENT MODEL - Structured data (Schema.org); headless CMS (Sanity/Contentful/Strapi)
89. COPY HIERARCHY - Headline to subhead to body to caption to label; scannable
90. MICROCOPY - Button labels = action + outcome; errors = what + why + fix
91. STORYTELLING - Hook to tension to resolution to CTA; one narrative arc per page
92. VISUAL HIERARCHY - Size weight color space position; 3 levels max per view
93. WHITE SPACE - Active not empty; 50%+ negative space on premium pages
94. IMAGERY - Custom photography > stock; consistent palette; architectural quality
95. VIDEO - Narrative not demo; captioned; transcript linked; <30s hero loops
96. CASE STUDIES - Challenge to Approach to Solution to Impact (metrics); 3-5 images
97. TESTIMONIALS - Photo + name + role + company + quote + outcome; video preferred
98. FAQ - Accordion; schema markup; searchable; analytics on expands
99. LEGAL - Privacy Terms Cookie Policy accessible from footer; plain language
100. i18n - ICU MessageFormat; plural rules; date/number/currency per locale; RTL mirror

## DEVELOPMENT WORKFLOW (Lines 131-150)
101. MONOREPO - Turborepo/Nx; shared packages: ui config tokens utils hooks
102. TYPE SAFETY - TypeScript strict; Zod schemas shared client/server; tRPC/GraphQL Codegen
103. LINT/FORMAT - Biome (fast); pre-commit (lint-staged); CI gate
104. TESTING - Unit (Vitest) Integration (Playwright) Visual (Chromatic) A11y (axe-core)
105. STORYBOOK - Every component; docs; controls; a11y addon; viewport addon
106. CHANGESETS - Versioning; changelog auto; npm publish on merge
107. CI/CD - GitHub Actions; preview deploy per PR; production on tag; rollback button
108. ENVIRONMENTS - local preview staging production; feature flags (LaunchDarkly/Unleash)
109. OBSERVABILITY - OpenTelemetry; distributed tracing; error budgets; SLO dashboards
110. SECURITY - CSP strict; HSTS; COOP/COEP; Dependabot; SAST/DAST; secrets scanning

## CARQUIDEC SPECIALIZATION (Lines 151-170)
111. NARRATIVE SCROLL - Each project = chapter; full-bleed media + text counterpoint; no galleries
112. MATERIAL PALETTE - Stone wood water light as design tokens; OKLCH from real photos
113. BIOCLIMATIC DATA - Live sun path wind rose thermal comfort per project location
114. PARAMETRIC SHOWCASE - Grasshopper definitions embedded; interactive sliders
115. PROJECT DEPTH - Concept to Analysis to Process to Detail to Delivery to Post-occupancy
116. HERNANDO VOICE - First-person essays; philosophy; sketches; hand drawings scanned
117. CLIENT PORTAL - Secure; progress photos; selections; documents; timeline; messages
118. SPEC LIBRARY - Filterable; downloadable PDF/DWG; versioned; tagged by material/system
119. JOURNAL - Process writing; not blog; deep dives; reference for peers/clients
120. CONTACT - Calendly embed; project brief questionnaire; budget range; timeline estimator

## IMPLEMENTATION PRIORITY (Lines 171-185)
121. P0 - Tokens Theme Layout primitives Button Typography Color Spacing Focus SkipLink
122. P1 - Hero Section Container Grid Stack Card Navigation Footer Form Input Modal
123. P2 - ProjectChapter Timeline StatsCounter ImageCompare VideoPlayer AudioPlayer
124. P3 - ClientPortal SpecLibrary Journal Search Filter VirtualList InfiniteScroll
125. P4 - 3D Viewer Parametric Embed SunPath WindRose ThermalComfort PDF Generator

## QUALITY GATES (Lines 186-200)
126. LIGHTHOUSE - Perf >=95 A11y >=100 Best Practices >=95 SEO >=100
127. AXE-CORE - Zero violations CI gate
128. PLAYWRIGHT - Visual regression <0.1% pixel diff; cross-browser (Chrome Firefox Safari)
129. BUNDLE ANALYZER - No duplicate deps; tree-shaking verified; chunk map reviewed
130. REAL USER MONITORING - p75 LCP <2.5s INP <200ms CLS <0.1; alert on regression
131. DOCUMENTATION - Every component: props slots states a11y examples migration guide

---
EXECUTION ORDER: Tokens to Theme to Layout Primitives to Atomic Components to Compound Patterns to Pages to Features to Portal to Observability
VALIDATION: Each step produces working code + tests + story + docs; CI green before next step
