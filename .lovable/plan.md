# Vantastic Move Logistics — Website Plan

A premium, conversion-focused 5-page site for your courier & furniture removals business. Bold black + red theme designed to look high-end and trustworthy, with phone, WhatsApp, and email built in everywhere.

## Brand & Logo

- **Custom SVG logo**: a stylised spearhead silhouette with a small white rose-petal motif inside the tip — sharp, premium, memorable. Used in the header, footer, and as the favicon. (If you prefer a tweak after seeing it, I'll adjust.)
- **Color theme**: Deep black `#0A0A0A`, crimson red `#DC2626` accent, off-white text, subtle grey surfaces. Feels strong, masculine, and high-end — distinct from typical blue-and-orange van sites.
- **Typography**: Bold modern sans-serif for headlines, clean readable body font.
- **Imagery**: A long-wheelbase Ford Transit hero photo (sourced free, commercial-use), plus supporting visuals (furniture, UK road, van interior).

## Pages

1. **Home** — Hero, services preview, why choose us, coverage, testimonials, CTA.
2. **Services** — Full breakdown of every service offered.
3. **Pricing & How It Works** — 50% deposit / 50% on completion model, step-by-step booking flow, transparency.
4. **About** — Your story, values, trust signals (insured, reliable, owner-operated).
5. **Contact / Get a Quote** — Quote form, phone, WhatsApp, email, hours.

A sticky header with logo, nav, and a glowing red **Call Now** button appears on every page. A floating WhatsApp + Call button stack appears bottom-right on mobile.

## Home page sections

- **Hero**: Ford Transit LWB photo, dark overlay, headline **"Vantastic Moves. Door-to-Door. Anywhere in the UK."** with sub-tag *"Furniture, removals & courier runs handled by a real driver who cares."* Two CTAs: red "Get a Free Quote" + outline "Call 07778 192131".
- **Trust strip**: Fully Insured · Pay on Completion · Nationwide · Same-Day Available.
- **What We Do**: 4 service cards — Full House Removals, Furniture & Large Item Transport, Store-to-Door Delivery, Urgent / Same-Day Courier.
- **Why Vantastic**: Owner-operated, careful handling, transparent pricing, flexible hours.
- **Coverage**: "100% UK Coverage" panel with England / Scotland / Wales / N. Ireland chips.
- **Testimonials**: 3 placeholder reviews (you can swap real ones in later).
- **Final CTA banner**: "Need it moved today?" with Call + Quote buttons.

## Quote form (Contact page + Home)

Fields: Full name, phone, email, pickup postcode, drop-off postcode, preferred date, item details, urgency (standard / same-day).

On submit, **two things happen at once**:
1. Email sent to `mbhv_1@yahoo.co.uk` with all the details (using Lovable Cloud's built-in email — I'll set up a sender domain so it lands reliably).
2. A "Send via WhatsApp instead" button pre-fills a WhatsApp message to your number with the same details — perfect for instant phone notifications.

Validation prevents spam/empty submissions; success toast confirms send.

## Contact info (everywhere relevant)

- **Phone**: 07778 192131 (tap-to-call on mobile)
- **Email**: mbhv_1@yahoo.co.uk
- **WhatsApp**: 07778 192131
- Footer with logo, tagline, contact, service list, and copyright.

## Technical notes

- React + Tailwind, fully responsive (mobile-first — most customers will be on phones).
- Design tokens in `index.css` for the black/red theme so styling stays consistent.
- Logo built as inline SVG component (scalable, fast, no image asset needed).
- Hero & section images stored in `src/assets` for optimised bundling.
- Routing for the 5 pages via React Router; sticky header & floating mobile call/WhatsApp buttons as shared layout components.
- Quote form uses zod validation client-side; submission triggers a Lovable Cloud Edge Function that sends the email to your Yahoo inbox. Will require enabling Lovable Cloud and setting up an email sender domain (one-click during build).
- WhatsApp deep-link uses `https://wa.me/447778192131?text=...` with URL-encoded form data.
- SEO meta tags, Open Graph image, semantic HTML, sitemap-friendly structure.

Once you approve, I'll build the whole thing end-to-end.