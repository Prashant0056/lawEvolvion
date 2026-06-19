import type { GlobalConfig } from 'payload'

import { anyone } from '../access/anyone'

export const WhyChooseUs: GlobalConfig = {
  slug: 'why-choose-us',
  access: {
    read: anyone,
  },
  fields: [
    {
      name: 'sectionEyebrow',
      type: 'text',
      defaultValue: 'Why Aurelius',
    },
    {
      name: 'sectionHeadline',
      type: 'text',
      defaultValue:
        'A standard of representation that institutions and individuals return to.',
    },
    {
      name: 'partnerQuote',
      type: 'textarea',
    },
    {
      name: 'partnerQuoteCite',
      type: 'text',
    },
    {
      name: 'partnerQuoteImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'text',
          admin: { description: 'Lucide icon name — e.g. scale, target, lock' },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
