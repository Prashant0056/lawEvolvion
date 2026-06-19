# Aurelius Legal Partners — Payload CMS Collections Map

Derived from scanning `/Aurelius Legal Partners.html`. Every section of the single-page site is accounted for below. Use this document as the authoritative source of truth when building or updating Payload collections and globals.

---

## Summary of What to Build

| Type | Slug | Maps to section |
|------|------|-----------------|
| Collection | `practice-areas` | Practice Areas section |
| Collection | `attorneys` | Attorneys section |
| Collection | `case-results` | Case Results (Representative Matters) |
| Collection | `testimonials` | Testimonials / Client Voices |
| Collection | `insights` | Insights / Blog articles |
| Collection | `awards` | Awards / Recognition |
| Collection | `consultation-requests` | Contact form submissions |
| Collection | `media` | **Existing** — extend with alt text |
| Collection | `categories` | **Existing** — used by `insights` |
| Collection | `users` | **Existing** — admin users |
| Global | `site-settings` | Hero, trust strip, firm info, CTA band |
| Global | `process-steps` | "How We Work" section |
| Global | `why-choose-us` | "Why Aurelius" feature list |
| Global | `header` | **Existing** — nav links |
| Global | `footer` | **Existing** — extend with columns |

---

## Collections

---

### `practice-areas`

Powers the **Practice Areas** section (8 items, numbered 01–08).

```ts
slug: 'practice-areas'
admin.useAsTitle: 'title'
```

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | `text` | ✅ | e.g. "Corporate & M&A" |
| `shortDescription` | `textarea` | ✅ | One-line blurb under title |
| `order` | `number` | ✅ | Display order (1–8); used to render 01–08 index |
| `slug` | `text` | ✅ | URL-safe identifier |
| `icon` | `upload` (Media) | — | Optional icon image |
| `fullDescription` | `richText` | — | For future dedicated practice area pages |

**Seed data (from HTML):**

| # | title | shortDescription |
|---|-------|-----------------|
| 1 | Corporate & M&A | Formation, governance, financings, and cross-border transactions for companies at every stage. |
| 2 | Litigation & Disputes | Trial-tested advocacy in commercial, contractual, and high-stakes civil disputes. |
| 3 | Real Estate | Acquisitions, development, leasing, and complex property and land-use counsel. |
| 4 | Employment & Labour | Workforce strategy, executive agreements, investigations, and dispute resolution. |
| 5 | Private Client & Family | Estate planning, wealth preservation, and sensitive family matters handled with discretion. |
| 6 | Intellectual Property | Protection, licensing, and enforcement of the assets that drive enterprise value. |
| 7 | Immigration | Business and family immigration, from talent mobility to complex visa strategy. |
| 8 | White-Collar Defense | Discreet representation in investigations, regulatory enquiries, and enforcement actions. |

---

### `attorneys`

Powers the **Attorneys** section (grid of cards + "meet all 15" link).

```ts
slug: 'attorneys'
admin.useAsTitle: 'name'
```

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `name` | `text` | ✅ | Full name — e.g. "Eleanor Ashford-Vance" |
| `slug` | `text` | ✅ | URL slug for profile page |
| `role` | `text` | ✅ | e.g. "Managing Partner" |
| `specialty` | `text` | ✅ | Sub-line under role — e.g. "Corporate & Mergers · Governance" |
| `yearsExperience` | `number` | ✅ | Used for the badge ("24 yrs experience") |
| `photo` | `upload` (Media) | ✅ | Portrait image |
| `practiceAreas` | `relationship` → `practice-areas` | — | Linked practice areas (`hasMany: true`) |
| `bio` | `richText` | — | Full biography for profile page |
| `email` | `email` | — | Direct contact email |
| `order` | `number` | — | Controls grid display order |
| `featured` | `checkbox` | — | Whether to show on homepage grid |

**Seed data (from HTML):**

| name | role | specialty | yearsExperience |
|------|------|-----------|-----------------|
| Eleanor Ashford-Vance | Managing Partner | Corporate & Mergers · Governance | 24 |
| Marcus J. Holloway | Partner · Litigation | Commercial & Civil Disputes | 19 |
| Priya Nair Castellanos | Partner · Private Client | Estates, Family & Wealth | 17 |

---

### `case-results`

Powers the **Case Results** / "Representative Matters" section (dark band).

```ts
slug: 'case-results'
admin.useAsTitle: 'headline'
```

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `headline` | `text` | ✅ | The dollar amount or verdict label — e.g. "$2.5M" |
| `category` | `text` | ✅ | Practice label — e.g. "Civil Litigation" |
| `description` | `textarea` | ✅ | Narrative sentence about the outcome |
| `meta` | `text` | ✅ | Court/status line — e.g. "Settled · State Superior Court" |
| `order` | `number` | — | Display order in grid |
| `featured` | `checkbox` | — | Show on homepage |

**Seed data:**

| headline | category | meta |
|----------|----------|------|
| $2.5M | Civil Litigation | Settled · State Superior Court |
| $340M | Corporate / M&A | Closed · Cross-border |
| Defense Verdict | Commercial Trial | Verdict · Federal Court |

---

### `testimonials`

Powers the **Testimonials** carousel ("Client Voices").

```ts
slug: 'testimonials'
admin.useAsTitle: 'clientName'
```

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `quote` | `textarea` | ✅ | The testimonial text (no surrounding quotes) |
| `clientName` | `text` | ✅ | e.g. "Daniel R. Whitfield" |
| `clientTitle` | `text` | ✅ | e.g. "CEO · Corporate Acquisition" |
| `avatarInitial` | `text` | — | Single letter fallback — auto-derived from `clientName` if blank |
| `photo` | `upload` (Media) | — | Optional headshot; falls back to initial avatar |
| `order` | `number` | — | Carousel order |
| `featured` | `checkbox` | — | Show in homepage carousel |

**Seed data:**

| clientName | clientTitle | quote |
|------------|-------------|-------|
| Daniel R. Whitfield | CEO · Corporate Acquisition | Aurelius treated our acquisition as if the company were their own… |
| Sophia Lindqvist | Private Client · Family Matter | I never once felt like a case number… |
| Marcus Bellweather | Board Chair · Litigation | Discreet, decisive, and relentlessly prepared… |

---

### `insights`

Powers the **Insights** section — featured article + article list rows. Extends the existing `Posts` pattern.

```ts
slug: 'insights'
admin.useAsTitle: 'title'
```

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | `text` | ✅ | Article headline |
| `slug` | `text` | ✅ | URL slug |
| `publishedDate` | `date` | ✅ | Display date — e.g. "June 12, 2026" |
| `readTime` | `number` | — | Estimated minutes — e.g. `8` |
| `excerpt` | `textarea` | ✅ | Short summary shown in list / meta rows |
| `coverImage` | `upload` (Media) | — | Featured article cover image |
| `category` | `relationship` → `categories` | ✅ | e.g. "Business Law", "Litigation", "Family Law" |
| `content` | `richText` | ✅ | Full article body |
| `featured` | `checkbox` | — | Renders as the large featured article card |
| `author` | `relationship` → `attorneys` | — | Linked attorney author |

> **Note:** Reuse the existing `categories` collection — just seed it with law-specific categories (Business Law, Litigation, Family Law, Compliance, Employment, Corporate).

**Seed data (article titles from HTML):**

| title | category | featured |
|-------|----------|---------|
| What the new merger-review thresholds mean for mid-market acquisitions | Business Law | ✅ |
| Five questions to ask before you agree to arbitration | Litigation | — |
| Protecting generational wealth through thoughtful estate planning | Family Law | — |
| Building an internal investigation playbook before you need one | Compliance | — |
| Executive separation agreements: where disputes most often begin | Employment | — |

---

### `awards`

Powers the **Awards / Recognition** row.

```ts
slug: 'awards'
admin.useAsTitle: 'organization'
```

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `organization` | `text` | ✅ | e.g. "Chambers & Partners" |
| `distinction` | `text` | ✅ | e.g. "Band 1 · 2026" |
| `icon` | `select` | — | Lucide icon name — `award`, `medal`, `trophy`, `star`, `shield-check` |
| `order` | `number` | — | Left-to-right display order |

**Seed data:**

| organization | distinction | icon |
|--------------|-------------|------|
| Chambers & Partners | Band 1 · 2026 | award |
| The Legal 500 | Leading Firm | medal |
| Best Lawyers | Firm of the Year | trophy |
| Super Lawyers | 2019–2026 | star |
| Martindale-Hubbell | AV Preeminent | shield-check |

---

### `consultation-requests`

Stores submissions from the **Contact / Book Consultation** form. Admin-only; never publicly readable.

```ts
slug: 'consultation-requests'
access.read: ({ req }) => !!req.user   // authenticated admins only
access.create: () => true              // public form POST
access.update: ({ req }) => !!req.user
access.delete: ({ req }) => !!req.user
```

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `name` | `text` | ✅ | Full name |
| `email` | `email` | ✅ | |
| `phone` | `text` | — | |
| `practiceArea` | `select` | — | Options mirror the contact form dropdown |
| `message` | `textarea` | ✅ | "How can we help?" |
| `status` | `select` | — | `new` / `contacted` / `engaged` / `closed` — default `new` |
| `submittedAt` | `date` | — | Auto-set via `beforeChange` hook |

**`practiceArea` select options:**
`corporate-ma`, `litigation-disputes`, `real-estate`, `employment-labour`, `private-client-family`, `intellectual-property`, `immigration`, `white-collar-defense`, `other`

---

## Globals

---

### `site-settings`

Captures all firm-wide copy, contact details, and statistics that appear across multiple sections.

```ts
slug: 'site-settings'
```

#### Hero section

| Field | Type | Notes |
|-------|------|-------|
| `heroEyebrow` | `text` | "Aurelius Legal Partners · Est. 1998" |
| `heroHeadline` | `text` | Main H1 |
| `heroLead` | `textarea` | Sub-paragraph under H1 |
| `heroCtaPrimary` | `text` | Primary CTA label — "Schedule a Consultation" |
| `heroCtaSecondary` | `text` | Secondary CTA label — "Explore Practice Areas" |
| `heroBgImage` | `upload` (Media) | Background courtroom/office image |
| `heroPortraitImage` | `upload` (Media) | Attorney portrait in hero split |
| `heroStatSatisfaction` | `text` | "98%" — plate stat on portrait |

#### Trust strip / firm statistics

| Field | Type | Notes |
|-------|------|-------|
| `statYears` | `text` | "20+" |
| `statYearsLabel` | `text` | "Years of combined excellence" |
| `statCases` | `text` | "500+" |
| `statCasesLabel` | `text` | "Cases successfully resolved" |
| `statAttorneys` | `text` | "15" |
| `statAttorneysLabel` | `text` | "Licensed attorneys & counsel" |
| `statSatisfaction` | `text` | "98%" |
| `statSatisfactionLabel` | `text` | "Client satisfaction rating" |
| `statRecovered` | `text` | "$1.2B" |

#### Contact information

| Field | Type | Notes |
|-------|------|-------|
| `phone` | `text` | "(212) 555-1840" |
| `email` | `email` | "counsel@aureliuslegal.com" |
| `addressLine1` | `text` | "400 Park Avenue, 28th Floor" |
| `addressLine2` | `text` | "New York, NY 10022" |
| `officeHours` | `text` | "Mon–Fri · 8:30am – 6:00pm" |
| `officeHoursNote` | `text` | "Evenings by appointment" |
| `officeMapImage` | `upload` (Media) | Map image in contact aside |

#### CTA band

| Field | Type | Notes |
|-------|------|-------|
| `ctaHeadline` | `text` | "Your matter deserves a considered response." |
| `ctaBody` | `textarea` | Paragraph under CTA headline |

#### SEO / meta

| Field | Type | Notes |
|-------|------|-------|
| `metaTitle` | `text` | Browser tab title |
| `metaDescription` | `textarea` | `<meta name="description">` |

---

### `process-steps`

Powers the **"How We Work"** section. Ordered array of steps.

```ts
slug: 'process-steps'
```

| Field | Type | Notes |
|-------|------|-------|
| `sectionHeadline` | `text` | "A clear path from first call to resolution." |
| `steps` | `array` | Ordered list |
| `steps[].number` | `number` | 1–5 |
| `steps[].title` | `text` | e.g. "Consultation" |
| `steps[].description` | `textarea` | One-sentence description |

**Seed data:**

| # | title | description |
|---|-------|-------------|
| 1 | Consultation | A confidential conversation to understand your objectives, concerns, and timeline. |
| 2 | Case Evaluation | We assess the facts, risks, and options — and tell you candidly where you stand. |
| 3 | Legal Strategy | A tailored strategy built around your goals, with clear scope and expectations. |
| 4 | Representation | Senior-led advocacy at the table, in negotiations, and in the courtroom. |
| 5 | Resolution | We pursue the strongest possible outcome and stand with you through to close. |

---

### `why-choose-us`

Powers the **"Why Aurelius"** feature grid (6 items).

```ts
slug: 'why-choose-us'
```

| Field | Type | Notes |
|-------|------|-------|
| `sectionEyebrow` | `text` | "Why Aurelius" |
| `sectionHeadline` | `text` | "A standard of representation that institutions and individuals return to." |
| `partnerQuote` | `textarea` | Pull-quote from Managing Partner |
| `partnerQuoteCite` | `text` | Attribution — "— Eleanor Ashford-Vance, Managing Partner" |
| `partnerQuoteImage` | `upload` (Media) | Office/team image beside the quote |
| `items` | `array` | List of value propositions |
| `items[].icon` | `text` | Lucide icon name |
| `items[].title` | `text` | e.g. "Senior-Led Counsel" |
| `items[].description` | `textarea` | |

**Seed data:**

| icon | title | description |
|------|-------|-------------|
| scale | Senior-Led Counsel | Partners lead every engagement directly — your matter is never delegated to the most junior available hands. |
| target | Strategic Judgment | We frame every decision around your commercial and personal objectives, not just the legal question in front of us. |
| messages-square | Transparent Communication | Clear scope, candid assessments, and predictable billing — you always know where your matter stands. |
| award | Proven Results | A two-decade record of favourable settlements, verdicts, and transactions across industries. |
| lock | Absolute Discretion | Confidentiality is the foundation of our practice — protected at every stage and every level. |
| globe | Coordinated Reach | A network of trusted counsel lets us serve clients across jurisdictions without losing a step. |

---

## Existing Collections / Globals to Extend

### `categories` (existing)

Seed with law-specific labels used by `insights`:

```
Business Law · Litigation · Family Law · Compliance · Employment · Corporate · Immigration · Real Estate
```

### `media` (existing)

No schema changes needed. Ensure `alt` field is required — all image slots in the design have placeholder labels that map to `alt` values.

### `header` (existing global)

Verify nav links include all 6 anchor targets:
`Practice Areas` → `#practice`, `Attorneys` → `#attorneys`, `About` → `#about`, `Case Results` → `#results`, `Insights` → `#insights`, `Contact` → `#contact`

CTA button label: **"Book Consultation"** → `#contact`

### `footer` (existing global)

Extend with the four link columns seen in the design:

| Column | Links |
|--------|-------|
| Firm | About, Attorneys, Careers, Insights |
| Practice | Corporate, Litigation, Real Estate, Family |
| Resources | Blog, Case Results, FAQs, Client Portal |
| Legal | Privacy Policy, Terms of Service, Disclaimer, Contact |

Also add: `legalLine` (text) — "Attorney Advertising · Prior results do not guarantee a similar outcome."

---

## Access Control Summary

| Collection | Public read | Public create | Auth required |
|------------|-------------|---------------|---------------|
| `practice-areas` | ✅ | ❌ | write |
| `attorneys` | ✅ | ❌ | write |
| `case-results` | ✅ | ❌ | write |
| `testimonials` | ✅ | ❌ | write |
| `insights` | ✅ (published only) | ❌ | write |
| `awards` | ✅ | ❌ | write |
| `consultation-requests` | ❌ | ✅ (form POST) | read/update/delete |
| `media` | ✅ | ❌ | write |
| `categories` | ✅ | ❌ | write |

---

## Frontend Data Fetching Map

Each section of the page and the Payload query that feeds it:

```
NAV          → global: header
HERO         → global: site-settings (hero* fields + heroPortraitImage)
TRUST STRIP  → global: site-settings (stat* fields)
PRACTICE     → collection: practice-areas  (sort: order, limit: 8)
WHY AURELIUS → global: why-choose-us
ATTORNEYS    → collection: attorneys       (where: featured = true, sort: order, limit: 3)
CASE RESULTS → collection: case-results    (where: featured = true, sort: order, limit: 3)
TESTIMONIALS → collection: testimonials    (where: featured = true, sort: order)
PROCESS      → global: process-steps
INSIGHTS     → collection: insights        (sort: publishedDate desc, limit: 5, depth: 1)
AWARDS       → collection: awards          (sort: order)
CTA BAND     → global: site-settings (cta* fields)
CONTACT      → global: site-settings (phone, email, address*, officeHours*)
              → POST   consultation-requests
FOOTER       → global: footer
```
