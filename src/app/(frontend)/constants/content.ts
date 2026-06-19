/* Law Associates — static site content */

export const FIRM_NAME = 'Law Associates'
export const FIRM_TAGLINE = 'Law Associates · Est. 1998'
export const FIRM_EMAIL = 'counsel@lawassociates.com'
export const FIRM_PHONE = '(212) 555-1840'
export const FIRM_ADDRESS = '400 Park Avenue, 28th Floor\nNew York, NY 10022'
export const FIRM_HOURS = 'Mon–Fri · 8:30am – 6:00pm\nEvenings by appointment'

export const PRACTICE_AREAS = [
  { idx: '01', title: 'Corporate & M&A', desc: 'Formation, governance, financings, and cross-border transactions for companies at every stage.' },
  { idx: '02', title: 'Litigation & Disputes', desc: 'Trial-tested advocacy in commercial, contractual, and high-stakes civil disputes.' },
  { idx: '03', title: 'Real Estate', desc: 'Acquisitions, development, leasing, and complex property and land-use counsel.' },
  { idx: '04', title: 'Employment & Labour', desc: 'Workforce strategy, executive agreements, investigations, and dispute resolution.' },
  { idx: '05', title: 'Private Client & Family', desc: 'Estate planning, wealth preservation, and sensitive family matters handled with discretion.' },
  { idx: '06', title: 'Intellectual Property', desc: 'Protection, licensing, and enforcement of the assets that drive enterprise value.' },
  { idx: '07', title: 'Immigration', desc: 'Business and family immigration, from talent mobility to complex visa strategy.' },
  { idx: '08', title: 'White-Collar Defense', desc: 'Discreet representation in investigations, regulatory enquiries, and enforcement actions.' },
] as const

export const WHY_US_ITEMS = [
  { icon: 'Scale', title: 'Senior-Led Counsel', desc: 'Partners lead every engagement directly — your matter is never delegated to the most junior available hands.' },
  { icon: 'Target', title: 'Strategic Judgment', desc: 'We frame every decision around your commercial and personal objectives, not just the legal question in front of us.' },
  { icon: 'MessagesSquare', title: 'Transparent Communication', desc: 'Clear scope, candid assessments, and predictable billing — you always know where your matter stands.' },
  { icon: 'Award', title: 'Proven Results', desc: 'A two-decade record of favourable settlements, verdicts, and transactions across industries.' },
  { icon: 'Lock', title: 'Absolute Discretion', desc: 'Confidentiality is the foundation of our practice — protected at every stage and every level.' },
  { icon: 'Globe', title: 'Coordinated Reach', desc: 'A network of trusted counsel lets us serve clients across jurisdictions without losing a step.' },
] as const

export const ATTORNEYS = [
  { id: 'att-1', name: 'Eleanor Ashford-Vance', role: 'Managing Partner', spec: 'Corporate & Mergers · Governance', years: '24', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80' },
  { id: 'att-2', name: 'Marcus J. Holloway', role: 'Partner · Litigation', spec: 'Commercial & Civil Disputes', years: '19', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80' },
  { id: 'att-3', name: 'Priya Nair Castellanos', role: 'Partner · Private Client', spec: 'Estates, Family & Wealth', years: '17', img: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=600&q=80' },
] as const

export const CASE_RESULTS = [
  { cat: 'Civil Litigation', amt: '$2.5M', desc: 'Secured a landmark settlement on behalf of an individual client following a multi-year dispute resolved on the eve of trial.', meta: 'Settled · State Superior Court' },
  { cat: 'Corporate / M&A', amt: '$340M', desc: 'Lead counsel on a cross-border acquisition, structuring the transaction and navigating regulatory clearance across two jurisdictions.', meta: 'Closed · Cross-border' },
  { cat: 'Commercial Trial', amt: 'Defense Verdict', desc: 'Prevailed at trial in a high-profile commercial matter, defeating substantial claims against a long-standing institutional client.', meta: 'Verdict · Federal Court' },
] as const

export const TESTIMONIALS = [
  { quote: 'Law Associates treated our acquisition as if the company were their own. Their judgment under pressure was the difference between a deal and a disaster.', name: 'Daniel R. Whitfield', role: 'CEO · Corporate Acquisition', initial: 'D' },
  { quote: "I never once felt like a case number. They explained every option in plain language and fought for the outcome I needed.", name: 'Sophia Lindqvist', role: 'Private Client · Family Matter', initial: 'S' },
  { quote: 'Discreet, decisive, and relentlessly prepared. When the stakes were highest, Law Associates was exactly the counsel we hoped for.', name: 'Marcus Bellweather', role: 'Board Chair · Litigation', initial: 'M' },
] as const

export const PROCESS_STEPS = [
  { num: '1', title: 'Consultation', desc: 'A confidential conversation to understand your objectives, concerns, and timeline.' },
  { num: '2', title: 'Case Evaluation', desc: 'We assess the facts, risks, and options — and tell you candidly where you stand.' },
  { num: '3', title: 'Legal Strategy', desc: 'A tailored strategy built around your goals, with clear scope and expectations.' },
  { num: '4', title: 'Representation', desc: 'Senior-led advocacy at the table, in negotiations, and in the courtroom.' },
  { num: '5', title: 'Resolution', desc: 'We pursue the strongest possible outcome and stand with you through to close.' },
] as const

export const INSIGHTS_LIST = [
  { cat: 'Litigation', time: '6 min', title: 'Five questions to ask before you agree to arbitration' },
  { cat: 'Family Law', time: '5 min', title: 'Protecting generational wealth through thoughtful estate planning' },
  { cat: 'Compliance', time: '7 min', title: 'Building an internal investigation playbook before you need one' },
  { cat: 'Employment', time: '4 min', title: 'Executive separation agreements: where disputes most often begin' },
] as const

export const AWARDS = [
  { icon: 'Award', org: 'Chambers & Partners', yr: 'Band 1 · 2026' },
  { icon: 'Medal', org: 'The Legal 500', yr: 'Leading Firm' },
  { icon: 'Trophy', org: 'Best Lawyers', yr: 'Firm of the Year' },
  { icon: 'Star', org: 'Super Lawyers', yr: '2019–2026' },
  { icon: 'ShieldCheck', org: 'Martindale-Hubbell', yr: 'AV Preeminent' },
] as const
