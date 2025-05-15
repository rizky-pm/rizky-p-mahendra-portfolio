import React from 'react'
import ContactClient from './client'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { generateMeta } from '@/lib/seo/generateMetaData'

export const generateMetadata = async () =>
  generateMeta({
    title: 'Contact',
    description:
      "Contact me for professional inquiries, collaboration opportunities, or project discussions. I'm available to connect and assist with your needs.",
  })

const Contact = async () => {
  const payload = await getPayload({ config: configPromise })

  const contactData = await payload.find({
    collection: 'contact',
    limit: 1,
  })

  const { docs } = contactData

  if (!docs) {
    throw new Error('Contact data is not found')
  }

  console.log(docs[0])

  return <ContactClient contactDocs={docs[0]} />
}

export default Contact
