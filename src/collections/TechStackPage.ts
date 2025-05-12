import type { CollectionConfig } from 'payload'
import { v4 as uuidv4 } from 'uuid'

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

export const TechStack: CollectionConfig = {
  slug: 'tech-stack',
  labels: {
    singular: 'Tech Stack',
    plural: 'Tech Stack',
  },
  fields: [
    {
      name: 'id',
      type: 'text',
      unique: true,
      defaultValue: () => uuidv4(),
      admin: {
        readOnly: true,
      },
    },
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
      name: 'iconBig',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      required: false,
      label: 'Icon Big',
    },
    {
      name: 'iconSmall',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      required: false,
      label: 'Icon Small',
    },
  ],
}
