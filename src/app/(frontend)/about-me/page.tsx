import { getPayload } from 'payload'
import AboutMeClient from './client'
import configPromise from '@payload-config'

const AboutMePage = async () => {
  const payload = await getPayload({ config: configPromise })

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
