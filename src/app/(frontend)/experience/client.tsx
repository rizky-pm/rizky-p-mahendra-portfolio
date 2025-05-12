'use client'

import React from 'react'
import dayjs from 'dayjs'
import _ from 'lodash'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { Experience, ExperiencePage } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

type Props = {
  experinecePageDocs: ExperiencePage
  experienceDocs: Experience[]
}

const ExperienceClient = ({ experienceDocs, experinecePageDocs }: Props) => {
  const { push } = useRouter()
  return (
    <motion.section
      initial={{
        y: -30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          ease: 'easeIn',
          duration: 0.5,
        },
      }}
      className="w-full px-5 sm:px-20 2xl:px-40 sm:py-10 2xl:py-20 sm:flex sm:justify-center sm:items-center"
    >
      <div className="w-full container flex flex-col xl:flex-row gap-10">
        <div className="w-full flex flex-col gap-2 xl:w-2/5 2xl:w-2/6 mb-auto xl:sticky top-0 left-0">
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-xl md:text-2xl xl:text-3xl uppercase tracking-widest inline-block leading-none">
              {experinecePageDocs.title}
            </h1>

            <RichText
              data={experinecePageDocs.description}
              className="prose prose-sm sm:prose tracking-wide"
            />
          </div>
        </div>

        <div className="xl:w-3/5 2xl:w-4/6 flex flex-col gap-6">
          {experienceDocs.map((item) => (
            <div key={item.id} className="flex flex-col items-end text-right">
              <h1
                className="w-fit scroll-m-20 text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-extrabold tracking-tight uppercase link"
                onClick={() => {
                  push(`/experience/${_.toString(item.id)}`)
                }}
              >
                {item.position}
              </h1>
              <p className="font-medium text-lg md:text-xl xl:text-2xl tracking-wide">
                {item.companyName}
              </p>
              <span className="text-base md:text-lg xl:text-xl text-muted-foreground tracking-wide">
                {/* {item.startDate} - {item.endDate} */}
                {`${dayjs(item.startDate).format('MMM YYYY')} - ${dayjs(item.endDate).format('MMM YYYY')}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default ExperienceClient
