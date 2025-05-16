import React from 'react'
import ExperienceDetailClient from './client'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import { generateMeta } from '@/lib/seo/generateMetaData'
import _ from 'lodash'

type Props = {
  params: {
    experienceId: string
  }
}

export const generateMetadata = async ({ params }: Props) => {
  const payload = await getPayload({ config: configPromise })

  const experience = await payload.findByID({
    collection: 'experience',
    id: params.experienceId,
  })

  if (!experience) return notFound()

  return generateMeta({
    title: experience.position + '-' + experience.companyName,
    description:
      _.toString(experience.description) ||
      'A key position focused on delivering high-quality outcomes while supporting organizational objectives.',
  })
}

const ExperienceDetail = async ({ params }: Props) => {
  const payload = await getPayload({ config: configPromise })
  const { experienceId } = params

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
