import React from 'react'
import ProjectDetailClient from './client'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    projectId: string
  }
}

const ProjectDetail = async ({ params }: Props) => {
  const payload = await getPayload({ config: configPromise })
  const { projectId } = await params

  try {
    const project = await payload.findByID({
      collection: 'projects',
      id: projectId,
    })

    if (!project) {
      notFound()
    }

    return <ProjectDetailClient projectDetailDocs={project} />
  } catch (err) {
    console.error(err)
    notFound()
  }
}

export default ProjectDetail
