# Copilot Instructions — firrst-dot? / prrimul punct

## Project identity

This project is **not** a generic timeline app.

It is a **multilayer interactive historical-legal-systemic reading experience** built around one core question:

**`firrst-dot?`**  
**`prrimul punct?`**  
_When did history stop being lived and start being administered?_

This project must be readable and meaningful for:
- a rebellious anti-system reader
- a person working inside institutions
- a legal reader
- a historian
- an intelligent layperson
- a reflective reader who is not looking for speed, but for depth

The product must **not** feel like:
- a sterile academic archive
- a conspiracy board
- a corporate landing page
- a dead PowerPoint converted to web
- a generic SaaS dashboard

It must feel like:
- a place to **read**
- a place to **pause**
- a place to **reflect**
- a place where history, law, administration, identity, property, visibility, traceability, and power can be explored without deadening the reader

This is a site for **slow clarity**, not for content dumping.

---

## Core product concept

The product is an **interactive multilingual timeline**.

Each timeline point ("dot") is **not just a date**.  
Each dot is a documented mutation.

Each dot must be readable on multiple layers:

1. **Human sentence**  
   A short, vivid line in normal language.

2. **Factual layer**  
   What happened.

3. **Legal / institutional layer**  
   What law, decree, decision, institution, registry, reform, or procedure changed the game.

4. **System layer**  
   What became possible after that mutation:
   - more visibility
   - more classification
   - more taxation
   - more execution
   - more interoperability
   - more control
   - more standardization

5. **Two ends of the stick**  
   Same event seen from both sides:
   - the system-side interpretation
   - the rebel-side interpretation

6. **Synthesis**  
   Not propaganda.  
   Not fake neutrality.  
   A sharp synthesis produced by the tension between thesis and antithesis.

The user should be able to move from:
- simple understanding
- to deep documentation
- to reflection

---

## Multilanguage requirement

This project must be designed from the beginning as **multilingual**.

At minimum, architecture must support:
- Romanian
- English

The structure must allow adding more languages later without breaking the content model.

### Multilanguage rules
- Do not hardcode UI strings directly in components.
- Do not assume one language in routing or content structure.
- Use a clean i18n-compatible architecture from the start.
- Content entries must be designed so they can later support translated variants.
- Slugs may differ by language if needed, but content identity must remain stable.

Recommended content strategy:
- keep a stable internal `id`
- allow language-specific titles, summaries, and body fields
- avoid coupling translated content to component logic

The user experience should make reading in different languages feel natural, not bolted on.

---

## Database requirement

Use **MongoDB** as the persistence layer.

This project is content-driven and will grow, so the architecture must assume:
- timeline dots are stored in structured records
- related dots can be connected
- content can be updated over time
- multilingual content may exist per dot
- future editorial workflows are possible

### MongoDB principles
- Design collections cleanly and intentionally.
- Separate content identity from display language.
- Avoid over-nesting when it harms readability or querying.
- Keep the model extensible for:
  - sources
  - themes
  - related dots
  - reading modes
  - multilingual fields
  - future editorial metadata

The database should support a serious knowledge structure, not a toy demo.

---

## Tech stack

Use:
- **Next.js 16** (App Router) — currently on 16.1.6
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **SCSS/SASS** only where it adds real structural value
- **MongoDB** + **Mongoose**
- Mobile-first, fully responsive
- Clean semantic HTML
- Accessible interactions

Do **not** add heavy dependencies unless truly needed.

Prefer:
- built-in Next.js features
- small utilities
- clean custom components

Avoid unnecessary UI kits unless explicitly requested later.

---

## Next.js 16 specifics — critical differences from Next.js 15

### proxy.ts replaces middleware.ts

In Next.js 16, `middleware.ts` has been **renamed to `proxy.ts`**.

- Use `src/proxy.ts` — NOT `src/middleware.ts`
- `middleware.ts` still works but is **deprecated** — never create or suggest it
- Always use `src/proxy.ts` for request interception, locale redirects, auth guards, etc.

**Correct proxy.ts pattern:**

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { NextProxy, ProxyConfig } from "next/server";

export const proxy: NextProxy = function (request: NextRequest) {
  // ...
  return NextResponse.next();
};

export default proxy;

export const config: ProxyConfig = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
```

**Renamed types (never use the old names):**
| Deprecated (Next.js 15) | Current (Next.js 16) |
|---|---|
| `NextMiddleware` | `NextProxy` |
| `MiddlewareConfig` | `ProxyConfig` |
| `middleware.ts` | `proxy.ts` |

### React 19 patterns

- Prefer **Server Components** by default — no `"use client"` unless interactivity is required
- Use `async/await` directly in Server Components — no `useEffect` for data fetching
- `use()` hook available for deferred data in Client Components
- `params` in page/layout props is now a `Promise<{...}>` — always `await params`
- `searchParams` in page props is also a `Promise<{...}>` — always `await searchParams`
- Server Actions with `"use server"` for mutations
- `React.cache()` for per-request memoization in Server Components

**Correct params pattern (Next.js 16 / React 19):**

```ts
// ✅ Correct
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // ...
}

// ❌ Wrong (Next.js 14/15 style)
export default function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
}
```

### Search — always check next/server exports

When looking for Next.js 16 types or APIs, search:
- `node_modules/next/dist/server/web/types.d.ts`
- `node_modules/next/dist/lib/constants.d.ts`
- `node_modules/next/dist/server/config-schema.d.ts`

---

## Design philosophy

This is primarily a **reading and reflection interface**.

The visual system must support:
- concentration
- contemplation
- seriousness
- rhythm
- contrast
- depth without heaviness

The site must feel:
- intelligent, not overloaded
- sharp, not aggressive
- layered, not chaotic
- human, not bureaucratic
- quiet, but not empty

### Emotional target
The user should feel:
- invited to slow down
- safe to read deeply
- able to compare perspectives
- drawn into reflection, not rushed into reaction

---

## Color and theme guidance

The main visual theme must communicate:
- **reading**
- **reflection**
- **calm tension**
- **historical depth**
- **quiet seriousness**
- **interiority**
- **lucidity**

This is **not** a bright productivity app.  
This is **not** a neon cyberpunk interface.  
This is **not** a generic black-and-white legal portal.

### Color direction
Favor a palette that feels like:
- paper
- ink
- dusk
- archive
- wood
- muted bronze
- weathered stone
- deep blue-grey thoughtfulness
- quiet sepia / warm neutral reading tones

Possible palette direction:
- warm off-white / parchment background
- charcoal / near-ink text
- muted deep navy or slate
- restrained bronze / ochre / muted gold accents
- desaturated earth tones for historical gravity
- soft contrast layers for cards and reading surfaces

Accent colors should feel meaningful, not decorative.

### Avoid
- loud primary-color dashboards
- startup gradients
- excessive black-on-black aesthetic
- overuse of pure white and pure blue
- “tech product” vibes
- anything that makes the reader feel hurried or overstimulated

### Reading-first visual rules
- typography must do most of the work
- color must support depth and hierarchy
- whitespace must create breath
- active states must be clear but restrained
- timeline dots should feel significant, not ornamental

---

## Product structure

The app should be built so it can grow into a large documented project.

At minimum, structure the product around these sections:

### 1. Home / Entry
Purpose:
- introduce the core question
- frame the project
- communicate that this is a place to read and reflect
- invite exploration without pressure
- establish intellectual tone

### 2. Interactive timeline
Main feature of the project.

Must support:
- chronological navigation
- focus on one dot
- expansion into details
- smooth transitions
- clear active state
- multilingual reading
- mobile usability

### 3. Dot detail view
Each dot opens a richer layer with:
- title
- date / period
- short summary
- thesis
- antithesis
- synthesis
- legal references
- historical context
- systemic consequence
- tags / themes
- optional sources list
- optional related dots

### 4. Reading modes / filters
The project should be designed to support filtering or alternative reading paths such as:
- history
- law
- property
- identity
- administration
- money / fiscality
- digitization
- person vs system

Later, the timeline may also support:
- reading by theme
- reading by regime
- reading by instrument
- reading by “cooling of history”

### 5. About / Method
A short explanation of how the project reads the world:
- not as random facts
- not as ideology only
- but as mutations recorded in law, administration, language, and systems

This section must be serious, not mystical and not defensive.

---

## Data model

The project must be **content-driven**.

Do not hardcode all content inside components.

Use a structured model for timeline dots.

A good starting shape:

```ts
export type LocalizedText = {
  ro?: string;
  en?: string;
};

export type PerspectiveBlock = {
  title: LocalizedText;
  body: LocalizedText;
};

export type SourceLink = {
  label: LocalizedText;
  href: string;
};

export type DotRecord = {
  id: string;
  slug: {
    ro?: string;
    en?: string;
  };

  title: LocalizedText;
  periodLabel: LocalizedText;
  sortYear: number;
  endYear?: number;

  shortLine: LocalizedText;
  summary: LocalizedText;

  thesis: LocalizedText;
  antithesis: LocalizedText;
  synthesis: LocalizedText;

  factualLayer: LocalizedText[];
  legalLayer: LocalizedText[];
  systemLayer: LocalizedText[];

  systemView: PerspectiveBlock;
  rebelView: PerspectiveBlock;

  whyItMatters: LocalizedText;
  consequences: LocalizedText[];

  tags: string[];
  relatedIds?: string[];

  sources?: SourceLink[];

  published?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
```

The codebase must make it easy to:
- add new dots
- reorder dots
- filter dots
- connect related dots
- render the same dot in compact and expanded modes
- support multiple languages cleanly

---

## Content rules

The app is built around **meaningful language**.

Never generate placeholder historical content that sounds intelligent but says nothing.

Avoid:
- vague filler
- inflated prose
- empty “visionary” copy
- pseudo-profound summaries

Each piece of content should answer:
- what changed
- what became possible
- who gained visibility/control/power
- what the public story was
- what the system story was

The tone must remain:
- direct
- vivid
- precise
- layered
- readable

Not sterile.  
Not melodramatic.  
Not cringey.

Because this is a reading-first experience, text rhythm matters:
- short paragraphs
- visual breathing space
- clear hierarchy
- no walls of undifferentiated text

---

## Interpretation model

This project relies on a repeated logic:

**dot → mutation → justification → effect → two ends of the stick → synthesis**

The UI and information architecture should respect this model.

Do not flatten everything into one neutral summary.

Each dot should preserve tension between:
- order vs control
- modernization vs traceability
- protection vs visibility
- efficiency vs reduction of opacity
- citizen vs administrable population
- freedom vs legibility

The synthesis should emerge from tension, not from false neutrality.

---

## Coding principles

### General
- Use strict TypeScript.
- Keep components small and composable.
- Prefer server components by default where appropriate.
- Use client components only when interactivity requires them.
- Keep data separate from presentation.
- Avoid monolithic files.
- Avoid duplication.

### Styling
- Tailwind first.
- SCSS/SASS only for cases where:
  - timeline layout logic
  - layered visual effects
  - reusable structural patterns
  - complex responsive timeline connectors
  - reading-surface refinements that Tailwind alone would make messy
- Do not mix styling approaches randomly.

### Responsiveness
The experience must work beautifully on:
- mobile
- tablet
- desktop
- large desktop

Mobile is not an afterthought.

Timeline interactions must remain understandable on small screens.

Reading on mobile must still feel calm and serious, not cramped.

### Animations
Use subtle motion.  
Motion must support:
- focus
- orientation
- reading flow
- state changes

Avoid animation for decoration only.

### Accessibility
- keyboard navigation
- visible focus states
- semantic headings
- color contrast
- accessible buttons and expandable panels
- reduced motion support if animations are used

---

## UX rules

### The timeline must be easy to scan
A user should quickly understand:
- where they are
- which dot is active
- what period they are looking at
- what changed at that point

### Each dot must have two levels
- compact view
- expanded documented view

### Reading must feel progressive
User should be able to:
- skim
- pause
- dive deeper
- compare perspectives

### Never trap the user in clutter
Deep detail should be available without turning the interface into a wall.

### Reflection is part of the UX
The interface must leave room for thinking.  
Do not design it like a feed.  
Do not design it like a task manager.  
Do not design it like an analytics dashboard.

---

## What the code should optimize for

Prioritize:
1. clarity
2. extensibility
3. readability
4. content structure
5. responsiveness
6. intellectual seriousness
7. visual rhythm
8. multilingual scalability
9. calm reading experience

Do not prioritize:
- trendy gimmicks
- over-engineered abstractions
- premature optimization
- novelty for its own sake

---

## Naming conventions

Use naming that reflects the project language.

Good examples:
- `TimelineAxis`
- `TimelineDot`
- `DotCard`
- `DotExpandedPanel`
- `PerspectiveSplit`
- `SynthesisBlock`
- `ReadingModeSwitcher`
- `ChronologyRail`
- `MutationSummary`
- `LegalLayer`
- `SystemLayer`
- `LocaleSwitcher`
- `ReadingSurface`
- `ReflectiveLayout`

Avoid meaningless names like:
- `Section1`
- `CardThing`
- `InfoBox2`
- `FancyTimeline`
- `DataWidget`

---

## Suggested file structure

A possible structure:

```txt
src/
  app/
    [locale]/
      page.tsx
      timeline/
        page.tsx
      dot/
        [slug]/
          page.tsx
      about/
        page.tsx

  components/
    layout/
    timeline/
    dot/
    typography/
    navigation/
    reading/
    locale/

  data/
    fallback/

  lib/
    db/
    timeline/
    i18n/
    utils/

  models/
    Dot.ts

  styles/
    globals.scss
    timeline.scss
    reading.scss
```

This structure can evolve, but keep the separation of:
- app routes
- UI components
- content/data
- DB models
- logic/helpers
- styles
- locale concerns

---

## What success looks like

A successful result is a site where:
- the question feels alive
- the timeline is usable
- each dot carries weight
- the user can feel both history and system
- the interface has rhythm
- the content is understandable by non-specialists
- the structure is credible to specialists
- the project can scale over time
- the site feels like a place to return to and think

---

## What failure looks like

Failure is:
- beautiful but empty
- smart-sounding but vague
- too academic to feel alive
- too rebellious to stay credible
- too technical to be readable
- too simplistic to hold up
- too cluttered to explore
- too bright or too “productized” to invite reflection

---

## Git workflow

This project uses a two-branch local workflow:

| Branch | Role |
|--------|------|
| `main` | Stable versions only — merged from `work` when ready |
| `work` | Active development — all day-to-day commits go here |

**You are always on `work` during development.**

### Daily commands

```bash
# Commit current changes on work
git add -A && git commit -m "feat: descriere scurtă"

# Promote to main when stable
git checkout main
git merge work
git checkout work

# See where you are
git log --oneline --graph --all
git branch
git status
```

### Commit message conventions

```bash
feat: adaugă componentă nouă sau funcționalitate
fix: repară un bug
style: schimbări vizuale / CSS / SCSS
content: actualizare conținut dots sau dicționar
chore: config, dependențe, seed, build
refactor: restructurare fără schimbări de comportament
```

### Rules
- Never commit directly to `main`
- Never merge `main` → `work` (mergi întotdeauna `work` → `main`)
- One logical change per commit — nu îmbina lucruri neinrudite
- `.env.local` este în `.gitignore` — nu se commitează niciodată

---

## Working style for the coding agent

When implementing:
- think in systems, not isolated screens
- preserve the project’s intellectual tension
- do not oversimplify the concept into a generic timeline
- do not bury meaning under UI tricks
- do not produce placeholder content that pretends to be deep
- scaffold with care so real content can be added cleanly later
- respect multilingual architecture from the start
- respect MongoDB-backed content structure from the start
- preserve the reading-first nature of the experience

When uncertain, choose:
- clarity over spectacle
- structure over clutter
- layered meaning over decorative polish
- reading comfort over visual gimmick
- calm over noise

---

## Final rule

This project is about the moment when history cools into registry.

The code should respect that.

The interface must help users feel the transition from:
- lived world
- to documented world

without becoming dead itself.
