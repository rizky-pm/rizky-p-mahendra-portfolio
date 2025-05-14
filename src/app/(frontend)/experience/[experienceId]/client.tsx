'use client'

import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import _ from 'lodash'
import { motion } from 'motion/react'
import { Experience } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import ForceLoading from '@/components/force-loading'
import { useLoadingStore } from '@/store/useLoadingStore'

type Props = {
  experienceDetailDocs: Experience
}

const ExperienceDetailClient = ({ experienceDetailDocs }: Props) => {
  const { setIsLoading } = useLoadingStore()

  useEffect(() => {
    const toggleLoading = async () => {
      setIsLoading(false)
    }

    toggleLoading()
  }, [setIsLoading])
  return (
    <>
      <ForceLoading />
      <motion.section
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.3,
            ease: 'easeIn',
            duration: 0.25,
          },
        }}
        className="w-full px-5 sm:px-20 sm:py-10 2xl:px-30 min-h-screen sm:min-h-auto sm:flex sm:justify-center sm:items-center"
      >
        {experienceDetailDocs ? (
          <div className="w-full flex flex-col xl:justify-center xl:items-center gap-10 md:gap-20 xl:gap-30 2xl:gap-20">
            <div className="bg-background flex flex-col text-foreground  items-center h-[50dvh] sm:h-[60dvh] xl:h-[55dvh] w-full gap-2 p-5">
              <div className="flex flex-col gap-2 xl:flex-row xl:gap-0 justify-between items-center text-sm text-center xl:text-left 2xl:text-xl tracking-widest uppercase w-full">
                <p>{experienceDetailDocs.companyName}</p>
                <p>
                  {`${dayjs(experienceDetailDocs.startDate).format('MMM YYYY')} - ${dayjs(experienceDetailDocs.endDate).format('MMM YYYY')}`}
                </p>
              </div>
              <h1 className="scroll-m-20 text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl font-extrabold tracking-tighter uppercase text-center mt-auto">
                {experienceDetailDocs.position}
              </h1>
            </div>

            <div className="container flex justify-center space-y-4 transition-all">
              <RichText
                className="prose text-sm leading-6 2xl:prose 3xl:prose-xl tracking-wide"
                data={experienceDetailDocs.description}
              />
            </div>
          </div>
        ) : null}
      </motion.section>
    </>
  )
}

export default ExperienceDetailClient
