/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Payload type casts in this file will resolve once `payload-types.ts` is
 * regenerated after the new collections/globals are migrated.
 */
import configPromise from '@payload-config'
import { getPayload } from 'payload'

import type {
  PayloadAttorney,
  PayloadAward,
  PayloadCaseResult,
  PayloadFooter,
  PayloadInsight,
  PayloadPracticeArea,
  PayloadProcessSteps,
  PayloadSiteSettings,
  PayloadTestimonial,
  PayloadWhyChooseUs,
} from './types/payload'

import { Attorneys } from './components/Attorneys'
import { Awards } from './components/Awards'
import { CaseResults } from './components/CaseResults'
import { Contact } from './components/Contact'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Insights } from './components/Insights'
import { Nav } from './components/Nav'
import { PracticeAreas } from './components/PracticeAreas'
import { Process } from './components/Process'
import { Statistics } from './components/Statistics'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'

export default async function LawAssociatesPage() {
  const payload = await getPayload({ config: configPromise })

  const [
    siteSettings,
    processSteps,
    whyChooseUs,
    footer,
    practiceAreasResult,
    attorneysResult,
    caseResultsResult,
    testimonialsResult,
    insightsResult,
    awardsResult,
  ] = await Promise.all([
    (payload.findGlobal({ slug: 'site-settings' as any, depth: 1 }) as Promise<any>).catch(() => null),
    (payload.findGlobal({ slug: 'process-steps' as any }) as Promise<any>).catch(() => null),
    (payload.findGlobal({ slug: 'why-choose-us' as any, depth: 1 }) as Promise<any>).catch(() => null),
    (payload.findGlobal({ slug: 'footer' }) as Promise<any>).catch(() => null),
    (payload.find({ collection: 'practice-areas' as any, sort: 'order', limit: 8, overrideAccess: false }) as Promise<any>).catch(() => null),
    (payload.find({ collection: 'attorneys' as any, where: { featured: { equals: true } }, sort: 'order', limit: 3, depth: 1, overrideAccess: false }) as Promise<any>).catch(() => null),
    (payload.find({ collection: 'case-results' as any, where: { featured: { equals: true } }, sort: 'order', limit: 3, overrideAccess: false }) as Promise<any>).catch(() => null),
    (payload.find({ collection: 'testimonials' as any, where: { featured: { equals: true } }, sort: 'order', depth: 1, overrideAccess: false }) as Promise<any>).catch(() => null),
    (payload.find({ collection: 'insights' as any, sort: '-publishedDate', limit: 5, depth: 1, overrideAccess: false }) as Promise<any>).catch(() => null),
    (payload.find({ collection: 'awards' as any, sort: 'order', overrideAccess: false }) as Promise<any>).catch(() => null),
  ])

  return (
    <>
      <Nav />
      <main id="top">
        <Hero siteSettings={siteSettings as PayloadSiteSettings | null} />
        <Statistics siteSettings={siteSettings as PayloadSiteSettings | null} />
        <PracticeAreas practiceAreas={(practiceAreasResult?.docs ?? null) as PayloadPracticeArea[] | null} />
        <WhyUs whyChooseUs={whyChooseUs as PayloadWhyChooseUs | null} />
        <Attorneys attorneys={(attorneysResult?.docs ?? null) as PayloadAttorney[] | null} />
        <CaseResults caseResults={(caseResultsResult?.docs ?? null) as PayloadCaseResult[] | null} />
        <Testimonials testimonials={(testimonialsResult?.docs ?? null) as PayloadTestimonial[] | null} />
        <Process processSteps={processSteps as PayloadProcessSteps | null} />
        <Insights insights={(insightsResult?.docs ?? null) as PayloadInsight[] | null} />
        <Awards awards={(awardsResult?.docs ?? null) as PayloadAward[] | null} />
        <CtaBand siteSettings={siteSettings as PayloadSiteSettings | null} />
        <Contact siteSettings={siteSettings as PayloadSiteSettings | null} />
      </main>
      <Footer footer={footer as PayloadFooter | null} />
    </>
  )
}
