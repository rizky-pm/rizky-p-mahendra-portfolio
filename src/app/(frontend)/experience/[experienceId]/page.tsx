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

  const experience = await payload.findByID({
    collection: 'experience',
    id: params.experienceId,
  })

  if (!experience) {
    throw new Error('Experience not found')
  }

  return <ExperienceDetailClient experienceDetailDocs={experience} />
}

export default ExperienceDetail
