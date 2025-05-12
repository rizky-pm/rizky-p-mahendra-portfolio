import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import HomePageClient from './client'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })

  const data = await payload.find({
    collection: 'hero',
    limit: 1,
  })

  const { docs } = data

  if (!docs) {
    throw new Error('Home page data is not found')
  }

  const homePageData = docs[0]

  return (
    <section className="relative flex h-screen w-full flex-col">
      <HomePageClient data={homePageData} />
    </section>
  )
}
