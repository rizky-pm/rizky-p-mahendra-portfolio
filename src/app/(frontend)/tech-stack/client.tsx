'use client'
import { TechStack } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Marquee } from '@/components/magicui/marquee'
import _ from 'lodash'
import { motion } from 'motion/react'

import React from 'react'
import Image from 'next/image'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import TechStackIcon from './components/tech-stack-icon'

type Props = {
  techStackDocs: TechStack
}

const TechStackClient = ({ techStackDocs }: Props) => {
  const { isExtraLargeScreen } = useBreakpoints()

  return (
    <motion.section
      initial={{ y: -30, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { ease: 'easeIn', duration: 0.5 },
      }}
      className="w-full md:min-h-screen px-5 sm:px-20 2xl:px-40 sm:py-10 2xl:py-20 sm:flex sm:flex-col sm:justify-center sm:items-center"
    >
      <div className="w-full container flex flex-col gap-10 mb-auto xl:sticky top-20 left-0 h-full xl:justify-center">
        <div className="flex flex-col gap-2 xl:w-2/5">
          <h1 className="font-extrabold text-xl md:text-2xl xl:text-3xl uppercase tracking-widest inline-block leading-none">
            {techStackDocs.title}
          </h1>

          <RichText
            data={techStackDocs.description}
            className="prose prose-sm sm:prose tracking-wide"
          />
        </div>

        <div className="flex xl:flex-col gap-8 xl:gap-16 justify-center xl:justify-start h-[70vh] xl:h-auto">
          {techStackDocs.iconBig?.length ? (
            <Marquee className="[--duration:40s]" vertical={!isExtraLargeScreen}>
              {techStackDocs.iconBig.map((item) => {
                if (typeof item === 'object' && item !== null && 'url' in item && 'id' in item) {
                  // Check if the item is a Media object
                  return (
                    <TechStackIcon isBig key={item.id}>
                      <Image width={300} height={300} src={item.url as string} alt={item.alt} />
                    </TechStackIcon>
                  )
                }
                return null
              })}
            </Marquee>
          ) : null}

          {techStackDocs.iconSmall?.length ? (
            <Marquee reverse className="[--duration:15s]" vertical={!isExtraLargeScreen}>
              {techStackDocs.iconSmall.map((item) => {
                if (typeof item === 'object' && item !== null && 'url' in item && 'id' in item) {
                  // Check if the item is a Media object
                  return (
                    <TechStackIcon isBig={false} key={item.url}>
                      <Image width={150} height={150} src={item.url as string} alt={item.alt} />
                    </TechStackIcon>
                  )
                }
                return null
              })}
            </Marquee>
          ) : null}
        </div>
      </div>
    </motion.section>
  )
}

export default TechStackClient
