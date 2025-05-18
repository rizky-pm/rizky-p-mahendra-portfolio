'use client'

import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import _ from 'lodash'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { Experience, ExperiencePage } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { useLoadingStore } from '@/store/useLoadingStore'
import ForceLoading from '@/components/force-loading'
import ListLayout from '../list-layout'

type Props = {
  experinecePageDocs: ExperiencePage
  experienceDocs: Experience[]
}

const ExperienceClient = ({ experienceDocs, experinecePageDocs }: Props) => {
  const { push } = useRouter()
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
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { ease: 'easeIn', duration: 0.5, delay: 0.75 } }}
        className="pb-10 md:pb-0"
      >
        <ListLayout
          left={
            <>
              <h1 className="font-extrabold text-xl md:text-2xl xl:text-3xl uppercase tracking-widest inline-block leading-none">
                {experinecePageDocs.title}
              </h1>
              <RichText
                data={experinecePageDocs.description}
                className="prose-sm 2xl:prose 3xl:prose-xl tracking-wide"
              />
            </>
          }
          right={
            <>
              {experienceDocs.map((item) => (
                <div key={item.id} className="flex flex-col items-end text-right">
                  <h1
                    className="w-fit scroll-m-20 text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-extrabold tracking-tight uppercase link"
                    onClick={async () => {
                      setIsLoading(true)
                      await new Promise((resolve) => setTimeout(resolve, 500))
                      push(`/experience/${_.toString(item.id)}`)
                    }}
                  >
                    {item.position}
                  </h1>
                  <p className="font-medium text-lg md:text-xl xl:text-2xl tracking-wide">
                    {item.companyName}
                  </p>
                  <span className="text-base md:text-lg xl:text-xl text-accent tracking-wide">
                    {`${dayjs(item.startDate).format('MMM YYYY')} - ${dayjs(item.endDate).format('MMM YYYY')}`}
                  </span>
                </div>
              ))}
            </>
          }
        />
      </motion.div>
    </>
  )
}

export default ExperienceClient
