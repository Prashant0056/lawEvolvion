import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Attorneys: CollectionConfig = {
  slug: 'attorneys',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'featured', 'updatedAt'],
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'specialty',
      type: 'text',
      required: true,
    },
    {
      name: 'yearsExperience',
      type: 'number',
      required: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'practiceAreas',
      type: 'relationship',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      relationTo: 'practice-areas' as any,
      hasMany: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'email',
      type: 'email',
      admin: { position: 'sidebar' },
    },
    {
      name: 'order',
      type: 'number',
      admin: { position: 'sidebar' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
  ],
}
