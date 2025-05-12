import React from 'react'
import ProjectDetailClient from './client'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

type Props = {
  params: {
    projectId: string
  }
}

const ProjectDetail = async ({ params }: Props) => {
  const payload = await getPayload({ config: configPromise })
  const { projectId } = await params

  const project = await payload.findByID({
    collection: 'projects',
    id: projectId,
  })

  if (!project) {
    throw new Error('Project not found')
  }

  return <ProjectDetailClient projectDetailDocs={project} />
}

export default ProjectDetail
