import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Banner } from '@/blocks/Banner/config'
import { Code } from '@/blocks/Code/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'

export const Contact: CollectionConfig = {
  slug: 'contact',
  labels: {
    singular: 'Contact',
    plural: 'Contact',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HorizontalRuleFeature(),
          ]
        },
      }),
      label: false,
      required: true,
    },
    {
      name: 'contactLinks',
      type: 'array',
      label: 'Contact Links',
      required: true,
      fields: [
        {
          name: 'platform',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'e.g., GitHub, LinkedIn, Email, Resume',
          },
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'https://example.com or mailto:your@email.com',
          },
        },
        {
          name: 'icon',
          type: 'relationship',
          relationTo: 'media',
          required: false,
          label: 'Media Icon',
        },
      ],
    },
  ],
}
