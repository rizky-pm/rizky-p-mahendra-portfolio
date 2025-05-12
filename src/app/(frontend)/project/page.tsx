import React from 'react'
import ProjectClient from './client'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

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
