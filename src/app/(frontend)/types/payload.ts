/** Shared prop types for Payload-backed frontend components. */

export type PayloadMedia = {
  id: string | number
  url?: string | null
  alt?: string | null
  filename?: string | null
  width?: number | null
  height?: number | null
}

export type PayloadPracticeArea = {
  id: string | number
  title: string
  shortDescription: string
  order: number
  slug: string
}

export type PayloadAttorney = {
  id: string | number
  name: string
  slug: string
  role: string
  specialty: string
  yearsExperience: number
  photo?: PayloadMedia | null
  featured?: boolean
  order?: number | null
}

export type PayloadCaseResult = {
  id: string | number
  headline: string
  category: string
  description: string
  meta: string
  featured?: boolean
  order?: number | null
}

export type PayloadTestimonial = {
  id: string | number
  quote: string
  clientName: string
  clientTitle: string
  avatarInitial?: string | null
  photo?: PayloadMedia | null
  featured?: boolean
  order?: number | null
}

export type PayloadCategory = {
  id: string | number
  title: string
}

export type PayloadInsight = {
  id: string | number
  title: string
  slug: string
  publishedDate: string
  readTime?: number | null
  excerpt: string
  coverImage?: PayloadMedia | null
  category?: PayloadCategory | null
  featured?: boolean | null
}

export type PayloadAward = {
  id: string | number
  organization: string
  distinction: string
  icon?: string | null
  order?: number | null
}

export type PayloadSiteSettings = {
  heroEyebrow?: string | null
  heroHeadline?: string | null
  heroLead?: string | null
  heroCtaPrimary?: string | null
  heroCtaSecondary?: string | null
  heroBgImage?: PayloadMedia | null
  heroPortraitImage?: PayloadMedia | null
  heroStatSatisfaction?: string | null
  statYears?: string | null
  statYearsLabel?: string | null
  statCases?: string | null
  statCasesLabel?: string | null
  statAttorneys?: string | null
  statAttorneysLabel?: string | null
  statSatisfaction?: string | null
  statSatisfactionLabel?: string | null
  statRecovered?: string | null
  phone?: string | null
  email?: string | null
  addressLine1?: string | null
  addressLine2?: string | null
  officeHours?: string | null
  officeHoursNote?: string | null
  officeMapImage?: PayloadMedia | null
  ctaHeadline?: string | null
  ctaBody?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
}

export type PayloadProcessStep = {
  id?: string
  number: number
  title: string
  description: string
}

export type PayloadProcessSteps = {
  sectionHeadline?: string | null
  steps?: PayloadProcessStep[] | null
}

export type PayloadWhyItem = {
  id?: string
  icon?: string | null
  title?: string | null
  description?: string | null
}

export type PayloadWhyChooseUs = {
  sectionEyebrow?: string | null
  sectionHeadline?: string | null
  partnerQuote?: string | null
  partnerQuoteCite?: string | null
  partnerQuoteImage?: PayloadMedia | null
  items?: PayloadWhyItem[] | null
}

export type PayloadFooterLink = {
  id?: string
  label: string
  url: string
}

export type PayloadFooterColumn = {
  id?: string
  title: string
  links?: PayloadFooterLink[] | null
}

export type PayloadFooter = {
  columns?: PayloadFooterColumn[] | null
  legalLine?: string | null
}
