import type { GlobalConfig } from 'payload'

import { anyone } from '../access/anyone'

export const ProcessSteps: GlobalConfig = {
  slug: 'process-steps',
  access: {
    read: anyone,
  },
  fields: [
    {
      name: 'sectionHeadline',
      type: 'text',
      defaultValue: 'A clear path from first call to resolution.',
    },
    {
      name: 'steps',
      type: 'array',
      fields: [
        {
          name: 'number',
          type: 'number',
          required: true,
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
