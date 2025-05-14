import React from 'react'
import TechStackClient from './client'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { generateMeta } from '@/lib/seo/generateMetaData'

export const generateMetadata = async () =>
  generateMeta({
    title: 'Tech Stack',
    description:
      'An overview of the tools, languages, and technologies I specialize in, along with how I apply them to build efficient and scalable solutions.',
  })

const TechStack = async () => {
  const payload = await getPayload({ config: configPromise })

  const techStackData = await payload.find({
    collection: 'tech-stack',
  })

  const { docs: techStackDocs } = techStackData

  if (!techStackDocs) {
    throw new Error('Tech Stack data is not found')
  }

  return <TechStackClient techStackDocs={techStackDocs[0]} />
}

export default TechStack
