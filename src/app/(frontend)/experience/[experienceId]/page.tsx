import React from 'react'
import ExperienceDetailClient from './client'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

type Props = {
  params: {
    experienceId: string
  }
}

const ExperienceDetail = async ({ params }: Props) => {
  const payload = await getPayload({ config: configPromise })
  const { experienceId } = await params

  const experience = await payload.findByID({
    collection: 'experience',
    id: experienceId,
  })

  if (!experience) {
    throw new Error('Experience not found')
  }

  return <ExperienceDetailClient experienceDetailDocs={experience} />
}

export default ExperienceDetail
