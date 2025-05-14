'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import { useRouter } from 'next/navigation'
import { Media, Project, ProjectPage } from '@/payload-types'
import _ from 'lodash'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Loading from '@/components/loading'

type Props = {
  projectPageDocs: ProjectPage
  projectsDocs: Project[]
}

const ProjectClient = (props: Props) => {
  const { projectPageDocs, projectsDocs } = props

  const [thumbnailPreview, setThumbnailPreview] = useState<Media | null>(null)

  const { isExtraLargeScreen } = useBreakpoints()
  const { push } = useRouter()

  if (!projectsDocs.length) return

  return (
    <>
      <Loading />
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
            duration: 0.25,
          },
        }}
        className="w-full px-5 sm:px-20 2xl:px-40 sm:py-10 2xl:py-20 sm:flex sm:justify-center sm:items-center"
      >
        <div className="w-full container flex flex-col xl:flex-row gap-10">
          <div className="w-full flex flex-col gap-2 xl:w-2/5 2xl:w-2/6 mb-auto xl:sticky top-0 left-0">
            <div className="flex flex-col gap-2">
              <h1 className="font-extrabold text-xl md:text-2xl xl:text-3xl uppercase tracking-widest inline-block leading-none">
                {projectPageDocs.title}
              </h1>

              <RichText
                data={projectPageDocs.description}
                className="prose-sm 2xl:prose 3xl:prose-xl tracking-wide"
              />
            </div>
            <div>
              {isExtraLargeScreen ? (
                <AnimatePresence mode="wait">
                  {typeof thumbnailPreview === 'string' ? (
                    <motion.img
                      key={thumbnailPreview}
                      src={thumbnailPreview}
                      alt=""
                      className="w-full xl:h-[500px] 2xl:h-[600px] object-cover shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    />
                  ) : thumbnailPreview ? (
                    <motion.img
                      key={thumbnailPreview.id}
                      src={thumbnailPreview.url as string}
                      alt=""
                      className="w-full h-[600px] object-cover shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    />
                  ) : null}
                </AnimatePresence>
              ) : null}
            </div>
          </div>

          <div className="xl:w-3/5 2xl:w-4/6 flex flex-col gap-6">
            {projectsDocs.length ? (
              <>
                {projectsDocs.map((item) => (
                  <div key={item.title} className="flex flex-col items-end text-right">
                    <h1
                      className="w-fit scroll-m-20 text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-extrabold tracking-tight uppercase link"
                      onMouseEnter={() => {
                        if (isExtraLargeScreen && Array.isArray(item.media)) {
                          setThumbnailPreview(item.media[0] as Media)
                        }
                      }}
                      onMouseLeave={() => {
                        if (isExtraLargeScreen) {
                          setThumbnailPreview(null)
                        }
                      }}
                      onClick={() => {
                        push(`/project/${_.toString(item.id)}`)
                      }}
                    >
                      {item.title}
                    </h1>
                    <RichText
                      data={item.description}
                      className="prose prose-sm sm:prose lg:prose-lg font-medium tracking-wide"
                    />
                  </div>
                ))}

                <h1 className="scroll-m-20 italic text-muted-foreground tracking-wide xl:text-xl uppercase text-right">
                  - More to come -
                </h1>
              </>
            ) : (
              <h1 className="scroll-m-20 italic text-muted-foreground xl:text-xl uppercase text-right tracking-wide">
                - You don&apos;t have any project yet. -
              </h1>
            )}
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default ProjectClient
