'use client'
import { TechStack } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import _ from 'lodash'
import { motion } from 'motion/react'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useLoadingStore } from '@/store/useLoadingStore'
import ForceLoading from '@/components/force-loading'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

type Props = {
  techStackDocs: TechStack
}

const TechStackClient = ({ techStackDocs }: Props) => {
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
        initial={{ y: -30, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { ease: 'easeIn', duration: 0.5, delay: 0.75 },
        }}
        className="w-full md:min-h-screen px-5 sm:px-20 2xl:px-40 sm:py-10 2xl:py-20 sm:flex sm:flex-col sm:justify-center sm:items-center"
      >
        <div className="w-full container flex flex-col gap-10 mb-auto xl:sticky top-20 left-0 h-full md:justify-center">
          <div className="flex flex-col gap-2 xl:w-2/5">
            <h1 className="text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold uppercase">
              {techStackDocs.title}
            </h1>

            <div>
              <RichText
                data={techStackDocs.description}
                className="prose-sm 2xl:prose 3xl:prose-xl"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-y-4 xl:gap-y-6 2xl:gap-y-10 gap-x-6 md:gap-x-10 xl:gap-x-12 2xl:gap-x-16 3xl:gap-x-20 justify-center xl:justify-start">
            {techStackDocs.iconBig?.length
              ? techStackDocs.iconBig.map((item) => {
                  if (typeof item === 'object' && item !== null && 'url' in item && 'id' in item) {
                    return (
                      <TooltipProvider key={item.id}>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="flex items-center p-2">
                              <Image
                                width={500}
                                height={500}
                                src={item.url as string}
                                alt={item.alt}
                                priority
                                loading="eager"
                                className="w-12 h-12 md:w-16 md:h-16 xl:w-[72px] xl:h-[72px] 2xl:w-24 2xl:h-24 3xl:w-36 3xl:h-36 aspect-square"
                              />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-background text-foreground">
                            <p>{_.trimEnd(item.alt, ' icon')}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )
                  }
                  return null
                })
              : null}
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default TechStackClient
