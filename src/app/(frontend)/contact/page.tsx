import React from 'react'
import ContactClient from './client'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

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

  return <ContactClient contactDocs={docs[0]} />
}

export default Contact
