import React from 'react'
import ProjectClient from './client'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { generateMeta } from '@/lib/seo/generateMetaData'

export const generateMetadata = async () =>
  generateMeta({
    title: 'Projects',
    description:
      'Browse a selection of my recent and featured projects that demonstrate my skills, problem-solving abilities, and commitment to quality.',
  })

const Project = async () => {
  const payload = await getPayload({ config: configPromise })

  const projectsData = await payload.find({
    collection: 'projects',
  })
  const projectPageData = await payload.find({
    collection: 'project-page',
  })

  const { docs: projectsDocs } = projectsData
  const { docs: projectsPageDocs } = projectPageData

  if (!projectsDocs || !projectsPageDocs) {
    throw new Error('Project data is not found')
  }

  return <ProjectClient projectPageDocs={projectsPageDocs[0]} projectsDocs={projectsDocs} />
}

export default Project
