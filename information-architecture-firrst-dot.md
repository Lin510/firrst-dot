# Information Architecture — firrst-dot? / prrimul punct

## Purpose

This document defines the **information architecture** of **firrst-dot? / prrimul punct**.

It answers:
- what pages exist
- why they exist
- what each page must do
- how users move through the experience
- how content is layered
- how the project can grow without losing clarity

This is not just a sitemap.  
It is the structural logic of a reading system.

---

## Core principle

The site must not feel like:
- a feed
- a dashboard
- a documentation portal
- a generic timeline app

It must feel like:
- a place to enter a question
- a place to follow thresholds
- a place to compare perspectives
- a place to read slowly
- a place to return to

The architecture must support:

**entry → orientation → threshold → depth → relation → return**

---

## The architectural promise

Every user, regardless of background, should be able to do at least one of these things:

- enter through the **main question**
- scan the **chronology**
- open a **single threshold**
- compare **thesis / antithesis / synthesis**
- move from one dot to a related one
- understand the project method
- read in their own language
- return later and continue

This is a site that must work for:
- the lay reader
- the legal reader
- the historical reader
- the reflective reader
- the suspicious reader
- the institutional reader

That means architecture must be:
- simple on the surface
- layered underneath
- scalable without clutter

---

## Primary navigation model

At minimum, the top-level structure should support:

1. **Home**
2. **Timeline / Chronology**
3. **Method**
4. **Dot detail**
5. **Language switch**

Later, the architecture should also support:
6. **Themes**
7. **Search**
8. **About / Project**
9. **Sources / Reading trails**

---

# 1. HOME

## Purpose
The home page is not just a welcome page.

It must:
- frame the core question
- establish tone
- create curiosity
- explain what kind of project this is
- offer clear entry paths

## What the home page should do
The user should understand quickly:
- this is about thresholds, not random facts
- this is about the cooling of history into registry
- the site is meant to be read slowly
- they can enter either through chronology or through method

## Recommended structure

### A. Hero
Contains:
- project title
- main question
- one short orientation paragraph
- one or two entry actions

Possible actions:
- “Enter chronology”
- “Read the method”
- “Start with the latest threshold”
- “Start with the first visible dot”

### B. Project framing
A short section explaining:
- what kind of timeline this is
- what a dot is
- why the project exists

### C. Featured thresholds
A small curated set of 3–5 dots:
- the first visible threshold
- one legal-administrative threshold
- one identity threshold
- one modern digital threshold

### D. Reading paths
Alternative entry points:
- by chronology
- by theme
- by question
- by tension

Examples:
- “How did the person become legible?”
- “How did property enter registry?”
- “How did the state cool into system?”

### E. Closing note
A calm exit / continuation zone:
- invitation to continue
- statement of method
- maybe a single memorable sentence

## Home page must avoid
- walls of explanation
- too many CTAs
- flashy “landing page” behavior
- overpromising
- feeling like a marketing page

---

# 2. TIMELINE / CHRONOLOGY PAGE

## Purpose
This is the main index of thresholds.

It should let the user:
- scan periods
- feel progression
- notice rupture points
- enter any dot easily

## What the chronology page should do
The user should understand:
- this is not a list of dates, but a sequence of mutations
- each point has a short human threshold sentence
- the timeline is meant to be scanned and revisited

## Recommended structure

### A. Page title
Clear and simple:
- “Cronologie”
- “Chronology”

### B. Optional short intro
1–2 sentences, max.
Enough to tell the user what they are looking at.

### C. Timeline axis
The main structural element.

Each dot preview should contain:
- period
- title
- short line
- optional tags

### D. Dot preview behavior
Each preview must feel:
- clickable
- meaningful
- readable
- not card-noisy

Clicking a dot should open its detail page.

### E. Optional filters
Later, this page should support:
- by theme
- by era
- by instrument
- by person/property/state/identity
- by “cooling level”

## Chronology page must avoid
- too much metadata in previews
- giant cards
- too many badges
- a feed-like feeling
- anything that kills scanability

---

# 3. DOT DETAIL PAGE

## Purpose
This is the heart of the project.

A dot detail page must transform a historical point into:
- a threshold
- a conflict
- a documented mutation
- a structural change in the relation between person and system

## What the dot page should do
The user should leave the page with:
- one memorable sentence
- one clear understanding of what changed
- one sense of what became newly possible
- one awareness of both ends of the stick
- one bridge to related thresholds

## Recommended page structure

### A. Hero
Contains:
- period
- title
- short line

This should mark the threshold immediately.

### B. Summary
A short prose section without card framing.
This gives the first contextual grounding.

### C. Thesis / Antithesis
Two side-by-side or stacked blocks depending on screen size.

They must:
- carry equal dignity
- create real tension
- not feel decorative

### D. Synthesis
A dedicated block.
This is the seal sentence zone.

### E. Evidence triad
Three supporting blocks:
- What happened
- Legal / institutional framework
- What became possible

These should not feel identical.
They serve different epistemic roles.

### F. Meaning block
A “Why it matters” section or equivalent.
This connects the threshold to present-day systems.

### G. Tags
Compact thematic tags.

### H. Related thresholds
Strongly recommended.
Each dot should lead to:
- previous related threshold
- next related threshold
- thematic sibling threshold

## Dot page must avoid
- becoming a long article
- turning into a source dump
- equalizing all blocks
- burying synthesis
- over-decorating the evidence layer

---

# 4. METHOD PAGE

## Purpose
The Method page explains how the project thinks.

It is not biography.  
It is not manifesto.  
It is not self-defense.

It must explain:
- why the project reads history through thresholds
- why law matters
- why registry matters
- why both ends of the stick matter
- why synthesis is necessary

## What the method page should do
The user should understand:
- this project is not random
- this project is not just ideology
- this project uses a deliberate interpretive structure

## Recommended structure

### A. Opening statement
One clear sentence:
- what the project does
- what it is not

### B. The core question
Why this question matters.

### C. The dot model
Explain:
- dot
- mutation
- justification
- effect
- thesis / antithesis / synthesis

### D. Why law and institutions matter
Why power leaves heavy traces in legal and administrative structures.

### E. Why both ends of the stick matter
Why the project refuses both:
- blind institutional speech
- lazy anti-system simplification

### F. Final methodological principle
Something like:
- history is read here as thresholds through which visibility, identity, and administrability deepen

## Method page must avoid
- self-mythology
- mystical fog
- over-academic methodology language
- defensive tone

---

# 5. LANGUAGE LAYER

## Purpose
The language layer is not an add-on.  
It is part of the architecture.

The user must be able to:
- switch language clearly
- stay oriented
- preserve context when possible

## Requirements
- locale-aware routes
- locale-aware content
- stable internal identity for dots
- translated titles and summaries
- graceful fallback handling

## IA implication
Language switch should ideally preserve:
- current page
- current dot when translated version exists

If translated version does not exist:
- show fallback or graceful messaging
- do not break the user flow

---

# 6. THEMATIC PATHS (FUTURE, BUT IMPORTANT)

## Purpose
Chronology is one entry path.  
Themes are another.

Some users will not think in years.  
They will think in categories.

## Recommended themes
- identity
- property
- registry
- tax
- administration
- digitization
- visibility
- state grammar
- person vs system

## Thematic page behavior
Each theme page should:
- define the theme
- show relevant dots
- show progression within the theme
- connect theme logic to the main project

## Example
Theme: **Identity**
- pre-evidence invisibility
- census
- continuous registry
- CNP
- RNEP
- physical-digital identity

---

# 7. SEARCH (FUTURE)

## Purpose
Once the project grows, search becomes necessary.

## Search should support
- title
- period
- tags
- laws / decrees / institutions
- key concepts

## Search results should show
- title
- period
- short line
- theme or tag context

Search must remain quiet and readable, not product-like.

---

# 8. SOURCES / READING TRAILS (FUTURE)

## Purpose
Not every user wants source depth.
Some do.

This area should allow:
- grouped source lists
- legal references by dot
- reading trails by theme
- optional bibliography / source graph later

## Important
This must support credibility without becoming the primary emotional interface.

The site is not a legal database.
It is a structured reading system with evidence.

---

# 9. RELATED DOT LOGIC

## Purpose
The project should encourage relational reading.

Every dot should not be isolated.

## Recommended relation types
- previous in chronology
- next in chronology
- previous in theme
- next in theme
- conceptual sibling
- escalation / consequence link

## Example
CNP 1978 may link to:
- pre-1978 identity record logic
- 1949 continuous registry
- 1990–2005 RNEP
- 2025 physical-digital identity

This relational architecture is essential for depth.

---

# 10. MOBILE ARCHITECTURE

## Principle
Mobile is not a reduced version.
It is a primary reading environment.

## Implications
- timeline previews must remain skimmable
- dot detail must keep narrative sequence
- thesis / antithesis must still feel like tension even when stacked
- synthesis must remain highly visible
- evidence blocks must remain distinct without clutter
- language switching must stay simple

## Mobile must avoid
- card overload
- tiny metadata
- awkward nested accordions
- losing the threshold feeling

---

# 11. USER JOURNEYS

## Journey A — the curious reader
1. lands on Home
2. reads the core question
3. enters Chronology
4. opens a dot
5. reads synthesis
6. opens a related dot
7. returns later

## Journey B — the legal / institutional reader
1. lands on Method or a direct dot
2. scans summary
3. checks legal / institutional block
4. evaluates synthesis
5. checks source references
6. follows related dots

## Journey C — the suspicious / anti-system reader
1. lands on a dot from recommendation or share
2. reads thesis first
3. tests antithesis
4. checks what became possible
5. decides whether the project is serious
6. continues into chronology

## Journey D — the reflective reader
1. lands on Home
2. reads framing and method
3. enters one or two dots slowly
4. returns to chronology
5. follows a chain through theme and time

The architecture must support all four.

---

# 12. PAGE HIERARCHY SUMMARY

## Primary pages
- Home
- Timeline / Chronology
- Dot detail
- Method

## Secondary pages
- Theme page
- About / Project
- Search results
- Sources / Reading trails

## Global elements
- top navigation
- locale switch
- related thresholds
- tags
- soft footer / project signature

---

# 13. CONTENT DEPTH LAYERS

Every piece of architecture should support three depth levels:

### Level 1 — scan
For readers who want quick orientation.
Examples:
- titles
- periods
- short lines
- tags

### Level 2 — understanding
For readers who want to understand the threshold.
Examples:
- summary
- thesis / antithesis
- synthesis
- why it matters

### Level 3 — verification
For readers who want grounding.
Examples:
- factual layer
- legal framework
- source links
- institutional references

This layering is one of the project’s strongest structural advantages.

---

# 14. WHAT THE ARCHITECTURE MUST PROTECT

The architecture must protect:
- calm reading
- tonal dignity
- threshold logic
- tension without chaos
- credibility without deadness
- scalability without clutter

If the architecture loses these, the project becomes:
- a stylish archive
- a political essay site
- a legal reference site
- or a decorative timeline

It must remain none of these alone.

---

# 15. SUCCESS TEST

The architecture is working if:
- a first-time visitor understands where to begin
- the chronology feels coherent
- dot pages feel like thresholds, not articles
- method clarifies without killing mystery
- related dots encourage continuation
- multilingual reading feels native
- the whole site feels worth revisiting

---

# Final architectural sentence

**firrst-dot? / prrimul punct** should be structured as a calm but charged reading system in which the user can move from question, to threshold, to evidence, to synthesis, and back into the larger map of how the person became increasingly legible to the system.
