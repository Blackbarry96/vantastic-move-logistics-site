# Front-end improvements — implementation plan

This document turns the UX/UI brainstorm into an ordered implementation plan with checklists. Scope is **front-end only** (no new backend features). Check boxes off as work completes.

---

## How to use

1. Work phases in order unless a task is blocked or you deliberately parallelize polish items.
2. Each phase ends with a short **verification** note — run through it before closing the phase.
3. Optional items are marked **(optional)**; skip if time-constrained.

---

## Phase 1 — Trust, credibility & clarity

High-impact copy and layout tweaks that don’t depend on heavy refactors.

### Homepage & shared trust

- [ ] **Hero polish**: Add subtle depth (e.g. vignette or refined gradient overlay) so text stays readable without flattening the image.
- [ ] **Hero supporting line** (optional): One short trust line under the H1 (e.g. response expectation, DBS/insured — align with legal/marketing truth).
- [ ] **Trust badge row**: Compact static row (icons/text/SVG) near primary CTAs (hero and/or final CTA): insured, DBS, pay on completion — match footer claims.
- [ ] **Testimonials**: Reduce “template” feel — vary star ratings slightly **or** add job context (route/type) and/or date window; keep claims truthful.
- [ ] **Coverage section**: Add visual specificity — UK map silhouette **or** city chips (e.g. London, Manchester, Edinburgh) while keeping “nationwide” messaging.

### Pricing page

- [ ] **How it works**: Desktop — horizontal connected timeline or stepper for the four steps; mobile — keep stacked cards or adapt layout without hurting readability.

### Services / home service cards

- [ ] **Card affordance**: Make full service cards clickable to `/services` (or deep section) with keyboard-accessible focus and hover states.

**Phase 1 verification**

- [ ] Copy matches what the business can legally claim.
- [ ] No regression on mobile tap targets (min ~44px where interactive).

---

## Phase 2 — UX, navigation & dead ends

Reduce friction and align primary actions across breakpoints.

### CTAs & hierarchy

- [ ] **Quote vs phone balance**: On secondary pages (e.g. Services, Pricing), ensure “Get a quote” / written path is visually competitive with “Call” where appropriate — not always secondary.
- [ ] **Floating CTA**: Review pulse animation — soften, limit to hover, or tie to `prefers-reduced-motion` so it doesn’t feel aggressive on mobile.
- [ ] **Sticky header**: Confirm phone button and nav don’t clash with floating CTAs; add **safe-area** padding (`env(safe-area-inset-*)`) for notched devices.

### Error & empty states

- [ ] **404 page**: Use same chrome as rest of site (Header/Footer/`Layout`) so users aren’t stranded without navigation.
- [ ] **404 content**: Optional short line + link to Contact/Pricing — still static.

**Phase 2 verification**

- [ ] Tab through header, mobile menu, floating buttons, and main CTAs — focus order makes sense.
- [ ] iOS Safari: bottom CTAs clear home indicator / safe area.

---

## Phase 3 — Accessibility & forms

- [ ] **Focus-visible audit**: Custom interactive zones (cards, tiles, region chips, timeline steps) show visible focus rings consistent with shadcn/Button patterns.
- [ ] **Quote form**: On submit failure / validation, show an **error summary** at top of form (in addition to per-field messages) for screen readers and mobile scanning.

**Phase 3 verification**

- [ ] Spot-check with keyboard only (no mouse) on Home, Contact, Services.
- [ ] Run automated axe/lighthouse accessibility pass on key routes (best-effort).

---

## Phase 4 — Visual rhythm & section variety

- [ ] **Section patterns**: Break repetition of “eyebrow + H2 + paragraph” on one major section — e.g. testimonials alternative layout, or asymmetric split on one block.
- [ ] **Optional scroll polish**: Subtle section entrance (fade/slide) with **`prefers-reduced-motion: reduce`** disabling or minimizing motion — keep logistics brand feeling solid, not flashy.

**Phase 4 verification**

- [ ] Motion feels optional and respectful; no layout shift jank on load.

---

## Phase 5 — Content modules (static)

- [ ] **FAQ accordion**: Add to Pricing and/or Contact using existing `accordion` UI — topics: deposit, cancellation/reschedule, two-man crew, what’s included — copy approved by business.
- [ ] **“Typical jobs” chips**: Small chip row on Home or Services hero — e.g. IKEA pickup, flat move, same-day sofa — static labels.

**Phase 5 verification**

- [ ] Accordion keyboard interaction (Radix) works; headings are semantic.

---

## Phase 6 — Performance & meta (front-end)

- [ ] **Hero image**: Responsive delivery — `srcset`/`sizes` or dedicated mobile crop; keep LCP image prioritized (`fetchpriority`, dimensions already present — confirm).
- [ ] **Fonts**: Reduce render-blocking — self-host Inter/Oswald **or** ensure `font-display` strategy and subset weights actually in use; trim unused weights if any.
- [ ] **OG / social**: Confirm `public/og-image.jpg` exists, correct dimensions (~1200×630), matches brand; update if missing or placeholder.

**Phase 6 verification**

- [ ] Lighthouse or Web Vitals: LCP and CLS acceptable on Home (local + prod-like build).
- [ ] Share debugger / OG preview shows correct title, description, image.

---

## Master checklist (all items)

Use this as a single progress tracker across phases.

### Trust & content

- [ ] Hero depth / gradient polish
- [ ] Hero optional supporting trust line
- [ ] Trust badge row near CTAs
- [ ] Testimonials: diversify (stars/context/dates) — truthful
- [ ] Coverage: map silhouette or city chips
- [ ] Pricing: connected step timeline (desktop)
- [ ] Service cards: clickable + focus states

### UX & layout

- [ ] Quote vs phone visual balance on key pages
- [ ] Floating CTA: pulse / reduced-motion
- [ ] Header + floating CTA: safe-area & overlap check
- [ ] 404: Layout + nav + optional links

### A11y & forms

- [ ] Focus-visible on custom interactives
- [ ] Quote form: submit error summary

### Visual polish

- [ ] One section with distinct layout rhythm
- [ ] Optional scroll micro-motion + reduced-motion guard

### Modules

- [ ] FAQ accordion (Pricing/Contact)
- [ ] Typical jobs chips

### Performance & SEO surface

- [ ] Hero responsive image strategy
- [ ] Font loading optimization
- [ ] OG image asset verified/updated

---

## Notes

- **Backend**: Out of scope here; form submission behavior stays as-is unless a separate ticket says otherwise.
- **Legal**: Any new claims (insurance, DBS, pricing) must match real operating practice before publishing.

---

## Revision log

| Date | Change |
|------|--------|
| 2026-05-01 | Initial plan from front-end brainstorm |
