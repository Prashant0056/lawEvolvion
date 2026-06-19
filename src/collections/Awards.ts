import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Awards: CollectionConfig = {
  slug: 'awards',
  admin: {
    useAsTitle: 'organization',
    defaultColumns: ['organization', 'distinction', 'order', 'updatedAt'],
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'organization',
      type: 'text',
      required: true,
    },
    {
      name: 'distinction',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'Award', value: 'award' },
        { label: 'Medal', value: 'medal' },
        { label: 'Trophy', value: 'trophy' },
        { label: 'Star', value: 'star' },
        { label: 'Shield Check', value: 'shield-check' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'order',
      type: 'number',
      admin: { position: 'sidebar' },
    },
  ],
}
