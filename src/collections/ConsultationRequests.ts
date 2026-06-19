import type { CollectionConfig } from 'payload'

export const ConsultationRequests: CollectionConfig = {
  slug: 'consultation-requests',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'practiceArea', 'status', 'submittedAt'],
  },
  access: {
    read: ({ req }) => !!req.user,
    create: () => true,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'practiceArea',
      type: 'select',
      options: [
        { label: 'Corporate & M&A', value: 'corporate-ma' },
        { label: 'Litigation & Disputes', value: 'litigation-disputes' },
        { label: 'Real Estate', value: 'real-estate' },
        { label: 'Employment & Labour', value: 'employment-labour' },
        { label: 'Private Client & Family', value: 'private-client-family' },
        { label: 'Intellectual Property', value: 'intellectual-property' },
        { label: 'Immigration', value: 'immigration' },
        { label: 'White-Collar Defense', value: 'white-collar-defense' },
        { label: 'Other', value: 'other' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Engaged', value: 'engaged' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'submittedAt',
      type: 'date',
      admin: { position: 'sidebar', readOnly: true },
      hooks: {
        beforeChange: [({ value }) => value || new Date().toISOString()],
      },
    },
  ],
}
