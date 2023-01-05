import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'support',
  title: 'Support',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'product',
      title: 'Product',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'issue',
      title: 'Issue',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'resolved',
      title: 'Resolved',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
    },
  },
})
