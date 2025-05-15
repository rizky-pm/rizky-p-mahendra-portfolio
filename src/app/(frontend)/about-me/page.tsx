import { getPayload } from 'payload'
import AboutMeClient from './client'
import configPromise from '@payload-config'
import { generateMeta } from '@/lib/seo/generateMetaData'

export const generateMetadata = async () =>
  generateMeta({
    title: 'About Me',
    description:
      'Learn more about my background, values, and journey as a professional. Get insights into who I am and what drives my work.',
  })

const AboutMePage = async () => {
  const payload = await getPayload({ config: configPromisess })

  const data = await payload.find({
    collection: 'about',
    limit: 1,
  })
  const { docs } = data

  if (!docs) {
    throw new Error('About me data is not found')
  }

  const aboutMeData = docs[0]

  return <AboutMeClient data={aboutMeData} />
}

export default AboutMePage
