import React from 'react'
import ProjectDetailClient from './client'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import { generateMeta } from '@/lib/seo/generateMetaData'
import _ from 'lodash'

type Props = {
  params: {
    projectId: string
  }
}

export const generateMetadata = async ({ params }: Props) => {
  const payload = await getPayload({ config: configPromise })

  const project = await payload.findByID({
    collection: 'projects',
    id: params.projectId,
  })

  if (!project) return notFound()

  return generateMeta({
    title: project.title,
    description: _.toString(project.description) || 'Detailed view of a featured project.',
  })
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
