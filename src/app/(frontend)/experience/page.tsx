import React from 'react'
import ExperienceClient from './client'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { generateMeta } from '@/lib/seo/generateMetaData'

export const generateMetadata = async () =>
  generateMeta({
    title: 'Experiences',
    description:
      'Explore my professional experience, including roles, responsibilities, and contributions across various organizations and projects.',
  })

const Experience = async () => {
  const payload = await getPayload({ config: configPromise })

  const experiencesData = await payload.find({
    collection: 'experience',
  })
  const experiencePageData = await payload.find({
    collection: 'experience-page',
  })

  const { docs: experiencesDocs } = experiencesData
  const { docs: experiencePageDocs } = experiencePageData

  if (!experiencesDocs || !experiencePageDocs) {
    throw new Error('Experience data is not found')
  }

  return (
    <ExperienceClient experienceDocs={experiencesDocs} experinecePageDocs={experiencePageDocs[0]} />
  )
}

export default Experience
