'use client'

import React, { useEffect } from 'react'
import { motion, Variants } from 'motion/react'
import Image from 'next/image'
import _ from 'lodash'
import { Media, Project } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import ForceLoading from '@/components/force-loading'
import { useLoadingStore } from '@/store/useLoadingStore'
import { Code, CodeXml, SquareArrowOutUpRight } from 'lucide-react'
import { useBreakpoints } from '@/hooks/useBreakpoints'

type Props = {
  projectDetailDocs: Project
}

type ProjectLink = {
  href: string
  label: string
  icon: React.ReactNode
}

const underlineVariants: Variants = {
  initial: { scaleX: 0 },
  active: { scaleX: 1 },
  hover: {
    scaleX: 1,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
}

const ProjectDetailClient = ({ projectDetailDocs }: Props) => {
  const projectImage = Array.isArray(projectDetailDocs.media)
    ? (projectDetailDocs.media[0] as Media)
    : null

  const { setIsLoading } = useLoadingStore()
  const { isMediumScreen } = useBreakpoints()

  useEffect(() => {
    const toggleLoading = async () => {
      setIsLoading(false)
    }

    toggleLoading()
  }, [setIsLoading])

  const links: ProjectLink[] = [
    {
      href: projectDetailDocs.liveUrl,
      label: 'Live URL',
      icon: <SquareArrowOutUpRight className="w-6 h-6 xl:w-8 xl:h-8" />,
    },
    {
      href: projectDetailDocs.frontendRepo,
      label: 'Front End Code',
      icon: <Code className="w-6 h-6 xl:w-8 xl:h-8" />,
    },
    projectDetailDocs.backendRepo && {
      href: projectDetailDocs.backendRepo,
      label: 'Back End Code',
      icon: <CodeXml className="w-6 h-6 xl:w-8 xl:h-8" />,
    },
  ].filter(Boolean) as ProjectLink[]

  if (!projectDetailDocs) return

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
            delay: 0.25,
            ease: 'easeIn',
            duration: 0.25,
          },
        }}
        className="w-full px-5 sm:px-20 2xl:px-30 sm:py-10 min-h-screen sm:flex sm:justify-center sm:items-center"
      >
        <div className="w-full flex flex-col xl:justify-center xl:items-center gap-10 md:gap-20 xl:gap-30 2xl:gap-40">
          <div className="bg-background flex flex-col text-foreground items-center h-[45vh] sm:h-[50vh] xl:h-[55vh] w-full gap-2 p-5">
            <div className="flex flex-wrap gap-x-4 justify-center xl:gap-x-6 px-2">
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
                loading="eager"
                priority
              />
            ) : null}

            <div className="w-full flex items-center gap-x-6 justify-center sm:gap-8 xl:gap-16 py-5">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  target="_blank"
                  href={link.href}
                  className="relative group flex gap-2 xl:text-lg items-center md:text-background cursor-pointer transition-all p-2 bg-background md:bg-transparent text-foreground rounded hover:bg-accent md:hover:bg-foreground md:hover:text-current"
                  initial="initial"
                  whileHover="hover"
                >
                  {link.icon}
                  {isMediumScreen ? link.label : null}

                  <motion.div
                    variants={underlineVariants}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 w-full h-[.1875rem] bg-current scale-x-0 group-hover:scale-x-100 origin-left"
                    style={{ transformOrigin: 'left' }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default ProjectDetailClient
