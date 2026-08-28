# Obsidian Auto Detail

Build a premium automotive detailing landing page using React, Vite and Tailwind CSS (TypeScript preferred).

PROJECT CONTEXT

This is a conceptual prototype/demo landing page for a premium automotive detailing studio, meant to demonstrate what a professional digital presence could look like. All content is fictional but must feel professional and industry-coherent — do not use lorem ipsum. This is a frontend-only application: no backend, no database, no authentication, no CMS.

CREATIVE DIRECTION: "OBSIDIAN GARAGE"

The site must feel like it was designed by a studio specialized in premium automotive brands — an automotive editorial experience, not a generic landing page. It should communicate precision, craftsmanship, exclusivity, and technical confidence. Photography and the vehicle must be the protagonist of every section. Think of the page as a digital automotive magazine/campaign, not a SaaS product page.

DESIGN SYSTEM

Colors:

- Background primary: #0A0A0B (deep black)

- Background secondary: #131315 (alternate sections)

- Text primary: #F5F4F0

- Text secondary: #8F8B84

- Accent (gold/amber): #C9A227 — use sparingly: CTAs, numbers, thin lines, hover states, never as a dominant fill color

- Accent dim: #7A661C

- Border: rgba(255,255,255,0.08)

- Overlay on images: rgba(0,0,0,0.55)

Typography:

- Display/headlines: a condensed geometric sans with personality (e.g. Syne or Archivo Expanded/Black), uppercase for large headlines

- Body/paragraphs: a neutral grotesk (e.g. Archivo, regular/medium weights)

- Micro-labels/numbers/section indicators: a monospace technical font (e.g. Space Mono or JetBrains Mono), wide letter-spacing

- Do NOT default to Inter, Poppins or Roboto

- Establish a clear scale: display, section headline, body, microcopy, labels/numbers

Spacing & Grid:

- 8px base spacing scale

- Section vertical padding: 120–160px desktop, 64–96px mobile

- 12-column grid, max-width 1440px, 24px gutter, 80px desktop side margin / 24px mobile

- Images are allowed to break out of the content grid and go full-bleed when it improves composition — do not force everything into a centered container

Borders, Radius, Shadows:

- Hairline 1px borders using the border token

- Radius kept minimal: 0–4px everywhere (no large rounded corners, no pill shapes)

- No decorative drop-shadows on cards; only soft, long shadows to add depth to overlapping photography

Motion:

- Duration 400–700ms, custom easing similar to cubic-bezier(0.16, 1, 0.3, 1)

- Patterns: fade + subtle translateY reveals on scroll, clip-path image reveals, subtle hover scale (1 → 1.03–1.05)

- No bounce, no elastic easing, no animating everything at once

- Respect prefers-reduced-motion

Buttons:

- Primary: 1px outline in accent color, accent-colored text, fills subtly on hover

- Secondary: ghost/underline text link with color transition

- Sharp corners or 2px radius max — never rounded-full

PAGE ARCHITECTURE (in order)

NAVBAR

OBJECTIVE: Minimal navigation that never competes with the photography.

LAYOUT: Transparent over the hero; gains a solid --bg-secondary background with a subtle blur after ~80px of scroll.

CONTENT: Conceptual wordmark, 3 links (Services, Process, Contact), one small CTA.

VISUAL DIRECTION: Thin, quiet, high contrast only on hover.

TYPOGRAPHY: Micro-label mono font for nav items, wide letter-spacing.

IMAGES: None.

INTERACTION: Background/blur transition on scroll.

ANIMATION: Smooth 300ms background fade-in.

RESPONSIVE BEHAVIOR: Wordmark + minimal menu icon (not a heavy hamburger); full-screen minimal menu overlay on open.

HERO

OBJECTIVE: First strong visual impression; establish precision, transformation, desire.

LAYOUT: Split/asymmetric composition — large vehicle photograph occupying 60–70% of the viewport (full-height on desktop), text block overlapping or beside it.

CONTENT: Short, specific headline (avoid generic phrases like "Premium automotive detailing for your car"), one line of supporting microcopy, section indicator ("01 / 08"), one discreet CTA (e.g. "Ver o processo").

VISUAL DIRECTION: Dark studio-like environment, dramatic side lighting, reflections on paint.

TYPOGRAPHY: Large condensed display headline, mono microcopy/indicator.

IMAGES: One dominant full-height/full-bleed hero photograph.

INTERACTION: None required beyond scroll cue.

ANIMATION: Headline and image fade/reveal on load with slight stagger.

RESPONSIVE BEHAVIOR: Image full-bleed on top, text stacked below with equal visual weight; keep the section indicator visible.

INTRO / POSITIONING

OBJECTIVE: Quickly establish the studio's positioning without explaining everything.

LAYOUT: Typography-led, mostly negative space; one large statement, a short paragraph, one technical number, one partial image at the margin.

CONTENT: A confident positioning statement + one credibility metric (fictional but plausible, e.g. vehicles serviced per year).

VISUAL DIRECTION: Quiet, restrained, lots of black space.

TYPOGRAPHY: Large display statement, small mono number label.

IMAGES: One partial/cropped image, not full width.

INTERACTION: None.

ANIMATION: Simple fade-in on scroll.

RESPONSIVE BEHAVIOR: Vertical stack, same restraint, reduce statement size proportionally.

SERVICES (Editorial Gallery)

OBJECTIVE: Present services as an editorial gallery, not a pricing grid.

LAYOUT: Horizontal editorial strip of numbered items (e.g. 01 Estofados, 02 Polimento Técnico, 03 Vitrificação, 04 Proteção de Pintura, 05 Acabamento) — one item can be visually larger than the rest; avoid a uniform 3x2 card grid.

CONTENT: Number, service name, short description, one micro-detail per item. Store this as structured data (services.ts), not hardcoded per item.

VISUAL DIRECTION: Image-dominant items, generous spacing between them.

TYPOGRAPHY: Mono numbers, display service names, small body description.

IMAGES: One strong photo per service (4:5 ratio).

INTERACTION: On desktop hover — image scales slightly, overlay lightens, title gains contrast, other items dim slightly. Keep it subtle.

ANIMATION: Smooth scale/opacity transitions only, no aggressive movement.

RESPONSIVE BEHAVIOR: Horizontal swipe with snap points on mobile, full touch-friendly tap targets, no hover-dependent information hidden from mobile users.

DETAIL (Silent Section)

OBJECTIVE: Communicate craftsmanship through a single, quiet, large image.

LAYOUT: One large image (paint reflection, leather texture, wheel, water on surface), minimal text, large negative space.

CONTENT: One short technical caption only.

VISUAL DIRECTION: High contrast, dramatic lighting, extreme close-up.

TYPOGRAPHY: Tiny mono caption in a corner.

IMAGES: One full-bleed or near-full-bleed image.

INTERACTION: None.

ANIMATION: Slow fade/scale reveal on scroll entry.

RESPONSIVE BEHAVIOR: Image remains dominant; caption repositions without shrinking image importance.

PROCESS

OBJECTIVE: Demonstrate technique through a clear step narrative.

LAYOUT: Sequential steps (01 Prepare · 02 Correct · 03 Protect · 04 Finish) with large numbers, each with image + short description, and a scroll-linked progress indicator.

CONTENT: Structured as data (processSteps.ts).

VISUAL DIRECTION: Numbers act as the visual anchor; images support each step.

TYPOGRAPHY: Very large mono/display numbers, concise body text per step.

IMAGES: One image per step.

INTERACTION: Progress indicator updates as the user scrolls through steps.

ANIMATION: Step-by-step fade/slide reveal, subtle progress-bar fill.

RESPONSIVE BEHAVIOR: Vertical stacked sequence, numbers pinned to the left, full width images.

BEFORE / AFTER (Wow Moment)

OBJECTIVE: The single most memorable moment of the page — make the value visible without reading.

LAYOUT: Large before/after image comparison, near full viewport.

CONTENT: One dramatic transformation pair.

VISUAL DIRECTION: High contrast between "before" and "after" states.

TYPOGRAPHY: Minimal — small mono labels "BEFORE" / "AFTER".

IMAGES: Two matched, well-composed photographs.

INTERACTION: Draggable slider/reveal on desktop (mouse drag), touch-drag on mobile — must feel intuitive.

ANIMATION: Smooth reveal following drag position; entrance animation when section comes into view.

RESPONSIVE BEHAVIOR: Full-width touch-optimized slider, adequate touch target size for the handle.

RESULTS

OBJECTIVE: Show outcome visually, not as a list of benefits.

LAYOUT: Asymmetric composition of 2–3 result photographs at different sizes.

CONTENT: Minimal captions only.

VISUAL DIRECTION: Consistent lighting/photography language with the rest of the site.

TYPOGRAPHY: Small mono captions.

IMAGES: 2–3 large photographs.

INTERACTION: None or very subtle parallax.

ANIMATION: Staggered fade/scale reveal.

RESPONSIVE BEHAVIOR: Stack vertically, keep at least one large image per viewport.

CTA (Conversion)

OBJECTIVE: Single clear conversion moment.

LAYOUT: High-contrast block, centered or asymmetric statement with one CTA.

CONTENT: One confident closing statement + one CTA button (avoid "Clique aqui"/"Saiba mais" — write something on-brand and specific).

VISUAL DIRECTION: Darkest or highest-contrast moment of the page.

TYPOGRAPHY: Large display statement.

IMAGES: Optional subtle background image/texture, heavily darkened.

INTERACTION: CTA hover state using accent color.

ANIMATION: Simple fade-in.

RESPONSIVE BEHAVIOR: Full-width stacked, CTA remains prominent and easily tappable.

FOOTER

OBJECTIVE: Clean close to the experience.

LAYOUT: Single simple row/block — do not turn this into another large section.

CONTENT: Wordmark, nav links, conceptual contact info, social links, copyright.

VISUAL DIRECTION: Quiet, minimal, small type.

TYPOGRAPHY: Small body/mono.

IMAGES: None.

INTERACTION: Standard link hovers.

ANIMATION: None needed.

RESPONSIVE BEHAVIOR: Stack into a compact vertical block.

ARCHITECTURE

Organize the project into logical components — do not build the page as a single giant file. Suggested structure (adapt as technically appropriate):

src/components, src/sections (Navbar, Hero, Intro, Services, Detail, Process, BeforeAfter, Results, CTA, Footer), src/data (services.ts, processSteps.ts, navigationItems.ts), src/hooks, src/lib, src/assets, App, main.

EDITABLE CONTENT

All repeating content (services, process steps, nav items, CTAs, social links) must be structured as data files, not hardcoded inline, so they can be swapped later without touching layout code.

FICTIONAL CONTENT RULES

Do not use a real company name, real address, real phone/WhatsApp number, real testimonials, real statistics, or real pricing. Use coherent, professional, industry-plausible placeholder content instead — never lorem ipsum.

ACCESSIBILITY

Semantic HTML, adequate color contrast, alt text on all images, visible focus states, full keyboard navigation, respect prefers-reduced-motion, accessible buttons and nav.

PERFORMANCE

Optimize images, use lazy loading below the fold, define explicit image dimensions to avoid layout shift, keep animations GPU-friendly, minimize unnecessary JavaScript.

SEO

Include title, meta description, semantic heading structure, alt text, and basic Open Graph tags.

PRIORITY ORDER FOR THIS FIRST BUILD

1. Structure and section order

2. Visual direction and composition

3. Typography system

4. Photography placement/composition

5. Spacing and layout rhythm

6. Responsive behavior

7. Interactions

8. Motion/animation

9. Micro-details

Do not attempt advanced animation polish before the structural and visual foundation is solid.

PRESERVATION RULE

Work incrementally. Once a section is working correctly, do not modify it unnecessarily while implementing another section. For example: do not modify the Hero, Navbar, or global typography when implementing the Services section unless explicitly required by the current task.

DO NOT

DO NOT create a generic AI landing page.

DO NOT use SaaS visual language.

DO NOT use purple or blue AI gradients.

DO NOT use glassmorphism.

DO NOT use excessive rounded cards.

DO NOT use generic icon cards.

DO NOT automatically use Inter, Poppins or Roboto.

DO NOT use emojis.

DO NOT make every section a card grid.

DO NOT center everything.

DO NOT overuse animations.

DO NOT invent real company information.

DO NOT create fake testimonials presented as real.

DO NOT copy the reference website.

DO NOT copy the Instagram.

DO NOT sacrifice usability for visual effects.

DO NOT make the website look like a template.

IMPORTANT IMPLEMENTATION RULE:

For this first build, focus on creating the complete visual foundation and responsive structure.

Do not spend excessive effort on advanced animations before the visual composition is correct.

Use high-quality automotive imagery that matches the dark, dramatic, premium art direction. If exact client imagery is not available, use coherent temporary imagery/placeholders that can be easily replaced later.

The final result must look like a professionally art-directed automotive website, not an AI-generated template.

After completing the first build, do not make additional design changes unless requested.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4b27a49d-d0f6-4d7c-8a08-a4fc4ff99d1e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
