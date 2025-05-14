'use client'

import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import _ from 'lodash'
import { Media, Project } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Loading from '@/components/loading'

type Props = {
  projectDetailDocs: Project
}

const ProjectDetailClient = ({ projectDetailDocs }: Props) => {
  const projectImage = Array.isArray(projectDetailDocs.media)
    ? (projectDetailDocs.media[0] as Media)
    : null

  if (!projectDetailDocs) return

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
            delay: 0.25,
            ease: 'easeIn',
            duration: 0.25,
          },
        }}
        className="w-full px-5 sm:px-20 2xl:px-30 sm:py-10 min-h-screen sm:flex sm:justify-center sm:items-center"
      >
        <div className="w-full flex flex-col xl:justify-center xl:items-center gap-10 md:gap-20 xl:gap-30 2xl:gap-20">
          <div className="bg-primary flex flex-col text-primary-foreground items-center h-[50dvh] sm:h-[60dvh] xl:h-[55dvh] w-full gap-2 p-5">
            <div className="flex flex-wrap gap-x-4 justify-center xl:gap-x-6 px-10">
              {projectDetailDocs.skills?.map((skill) => (
                <span key={skill.id} className="text-[10px] xl:text-base uppercase tracking-widest">
                  {skill.skill}
                </span>
              ))}
            </div>
            <h1 className="scroll-m-20 text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl font-extrabold tracking-tighter uppercase text-center mt-auto">
              {projectDetailDocs.title}
            </h1>
          </div>

          <div className="transition-all md:text-xl xl:text-2xl 2xl:text-4xl xl:leading-12 2xl:leading-16 text-center items-center justify-center flex flex-col gap-10 md:gap-20 xl:gap-30 2xl:gap-40">
            <RichText
              data={projectDetailDocs.description}
              className="prose-sm 2xl:prose 3xl:prose-xl text-center text-xl md:text-4xl lg:text-6xl md:px-10 xl:px-40"
            />
            {projectImage ? (
              <Image
                width={1250}
                height={1500}
                src={projectImage.url as string}
                alt={projectImage.alt}
                className="xl:w-full 2xl:w-[78.125rem] xl:h-[93.75rem]"
              />
            ) : null}

            <div className="w-full flex items-center justify-center gap-4 sm:gap-8 xl:gap-16">
              <a
                href={projectDetailDocs.liveUrl as string}
                className="hover:-skew-x-15 transition-all cursor-pointer underline hover:no-underline"
              >
                Live Demo
              </a>
              <a
                href={projectDetailDocs.frontendRepo as string}
                className="hover:-skew-x-15 transition-all cursor-pointer underline hover:no-underline"
              >
                Frontend Code
              </a>
              {(projectDetailDocs.backendRepo as string) ? (
                <a
                  href={projectDetailDocs.backendRepo as string}
                  className="hover:-skew-x-15 transition-all cursor-pointer underline hover:no-underline"
                >
                  Backend Code
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default ProjectDetailClient
