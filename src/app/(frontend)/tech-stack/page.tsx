import React from 'react'
import TechStackClient from './client'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

const TechStack = async () => {
  const payload = await getPayload({ config: configPromise })

  const techStackData = await payload.find({
    collection: 'tech-stack',
  })

  const { docs: techStackDocs } = techStackData

  if (!techStackDocs) {
    throw new Error('Tech Stack data is not found')
  }

  return <TechStackClient techStackDocs={techStackDocs[0]} />
}

export default TechStack
