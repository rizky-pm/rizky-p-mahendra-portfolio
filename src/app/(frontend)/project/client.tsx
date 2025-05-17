'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import { useRouter } from 'next/navigation'
import { Media, Project, ProjectPage } from '@/payload-types'
import _ from 'lodash'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { useLoadingStore } from '@/store/useLoadingStore'
import ForceLoading from '@/components/force-loading'
import ListLayout from '../list-layout'

type Props = {
  projectPageDocs: ProjectPage
  projectsDocs: Project[]
}

const ProjectClient = (props: Props) => {
  const { projectPageDocs, projectsDocs } = props

  const [thumbnailPreview, setThumbnailPreview] = useState<Media | null>(null)
  const { setIsLoading } = useLoadingStore()

  const { isExtraLargeScreen } = useBreakpoints()
  const { push } = useRouter()

  useEffect(() => {
    const toggleLoading = async () => {
      setIsLoading(false)
    }

    toggleLoading()
  }, [setIsLoading])

  if (!projectsDocs.length) return

  return (
    <>
      <ForceLoading />
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { ease: 'easeIn', duration: 0.25, delay: 0.75 } }}
      >
        <ListLayout
          left={
            <>
              <h1 className="font-extrabold text-xl md:text-2xl xl:text-3xl uppercase tracking-widest inline-block leading-none">
                {projectPageDocs.title}
              </h1>
              <RichText
                data={projectPageDocs.description}
                className="prose-sm 2xl:prose 3xl:prose-xl tracking-wide"
              />
              {isExtraLargeScreen && (
                <AnimatePresence mode="wait">
                  {thumbnailPreview ? (
                    <motion.img
                      key={thumbnailPreview.id}
                      src={thumbnailPreview.url as string}
                      alt=""
                      className="w-full h-[28.125rem] 2xl:h-[37.5rem] object-fill 2xl:object-cover shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    />
                  ) : null}
                </AnimatePresence>
              )}
            </>
          }
          right={
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
                    onMouseLeave={() => isExtraLargeScreen && setThumbnailPreview(null)}
                    onClick={async () => {
                      setIsLoading(true)
                      await new Promise((resolve) => setTimeout(resolve, 500))
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
          }
        />
      </motion.div>
    </>
  )
}

export default ProjectClient
