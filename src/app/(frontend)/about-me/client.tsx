'use client'

import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { About, Media } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Loading from '@/components/loading'

type Props = {
  data: About
}

const AboutMeClient = (props: Props) => {
  const { data } = props

  if (!data) return

  return (
    <>
      <Loading />
      <motion.section
        initial={{ y: -30, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { ease: 'easeIn', duration: 0.5 },
        }}
        className="w-full px-5 sm:px-20 2xl:px-40 sm:py-10 2xl:py-20 min-h-screen sm:flex sm:justify-center sm:items-center"
      >
        <div className="w-full container flex flex-col-reverse xl:flex-row gap-10 xl:sticky top-20 left-0 justify-center">
          <div className="flex flex-col gap-2 xl:w-2/5">
            <h1 className="text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold uppercase text-primary">
              {data.title}
            </h1>

            <div className="flex flex-col gap-4">
              <RichText data={data.description} className="prose prose-sm sm:prose tracking-wide" />
            </div>
          </div>

          <motion.div className="grid xl:w-3/5 grid-cols-[0.8fr_1.2fr] grid-rows-2 gap-2 -z-20">
            {Array.isArray(data.media)
              ? data.media.map((media, index) => {
                  if (
                    typeof media === 'object' &&
                    media !== null &&
                    'url' in media &&
                    'id' in media
                  ) {
                    const mediaObj = media as Media
                    const portraitClassname =
                      'transition-all row-span-2 w-fit object-cover grayscale hover:grayscale-0 justify-self-end'

                    return (
                      <Image
                        key={mediaObj.id}
                        alt={mediaObj.alt || 'Image'}
                        src={mediaObj.url as string}
                        width={500}
                        height={500}
                        className={
                          index === 0
                            ? portraitClassname
                            : 'transition-all w-full 2xl:w-fit h-full 2xl:h-full object-cover grayscale hover:grayscale-0'
                        }
                      />
                    )
                  }

                  return null
                })
              : null}
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default AboutMeClient
