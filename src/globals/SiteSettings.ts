import type { GlobalConfig } from 'payload'

import { anyone } from '../access/anyone'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: anyone,
  },
  fields: [
    // ── Hero ──────────────────────────────────────────────────────────────────
    {
      name: 'heroEyebrow',
      type: 'text',
      defaultValue: 'Aurelius Legal Partners · Est. 1998',
    },
    {
      name: 'heroHeadline',
      type: 'text',
      defaultValue: 'Strategic counsel for the matters that define your future.',
    },
    {
      name: 'heroLead',
      type: 'textarea',
    },
    {
      name: 'heroCtaPrimary',
      type: 'text',
      defaultValue: 'Schedule a Consultation',
    },
    {
      name: 'heroCtaSecondary',
      type: 'text',
      defaultValue: 'Explore Practice Areas',
    },
    {
      name: 'heroBgImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'heroPortraitImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'heroStatSatisfaction',
      type: 'text',
      defaultValue: '98%',
    },
    // ── Trust strip / firm statistics ────────────────────────────────────────
    {
      name: 'statYears',
      type: 'text',
      defaultValue: '20+',
    },
    {
      name: 'statYearsLabel',
      type: 'text',
      defaultValue: 'Years of combined excellence',
    },
    {
      name: 'statCases',
      type: 'text',
      defaultValue: '500+',
    },
    {
      name: 'statCasesLabel',
      type: 'text',
      defaultValue: 'Cases successfully resolved',
    },
    {
      name: 'statAttorneys',
      type: 'text',
      defaultValue: '15',
    },
    {
      name: 'statAttorneysLabel',
      type: 'text',
      defaultValue: 'Licensed attorneys & counsel',
    },
    {
      name: 'statSatisfaction',
      type: 'text',
      defaultValue: '98%',
    },
    {
      name: 'statSatisfactionLabel',
      type: 'text',
      defaultValue: 'Client satisfaction rating',
    },
    {
      name: 'statRecovered',
      type: 'text',
      defaultValue: '$1.2B',
    },
    // ── Contact information ───────────────────────────────────────────────────
    {
      name: 'phone',
      type: 'text',
      defaultValue: '(212) 555-1840',
    },
    {
      name: 'email',
      type: 'email',
      defaultValue: 'counsel@aureliuslegal.com',
    },
    {
      name: 'addressLine1',
      type: 'text',
      defaultValue: '400 Park Avenue, 28th Floor',
    },
    {
      name: 'addressLine2',
      type: 'text',
      defaultValue: 'New York, NY 10022',
    },
    {
      name: 'officeHours',
      type: 'text',
      defaultValue: 'Mon–Fri · 8:30am – 6:00pm',
    },
    {
      name: 'officeHoursNote',
      type: 'text',
      defaultValue: 'Evenings by appointment',
    },
    {
      name: 'officeMapImage',
      type: 'upload',
      relationTo: 'media',
    },
    // ── CTA band ─────────────────────────────────────────────────────────────
    {
      name: 'ctaHeadline',
      type: 'text',
      defaultValue: 'Your matter deserves a considered response.',
    },
    {
      name: 'ctaBody',
      type: 'textarea',
    },
    // ── SEO ──────────────────────────────────────────────────────────────────
    {
      name: 'metaTitle',
      type: 'text',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
    },
  ],
}
