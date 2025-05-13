import React from 'react'
import ExperienceDetailClient from './client'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    experienceId: string
  }
}

const ExperienceDetail = async ({ params }: Props) => {
  const payload = await getPayload({ config: configPromise })
  const { experienceId } = await params

  try {
    const experience = await payload.findByID({
      collection: 'experience',
      id: experienceId,
    })

    if (!experience) {
      notFound()
    }

    return <ExperienceDetailClient experienceDetailDocs={experience} />
  } catch (err) {
    console.error(err)
    notFound()
  }
}

export default ExperienceDetail
