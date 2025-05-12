'use client'

import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { About, Media } from '@/payload-types'

const contactItems = [
  { label: 'bi bi-linkedin', path: 'about-me' },
  { label: 'bi bi-github', path: 'tech-stack' },
  { label: 'bi bi-envelope-fill', path: 'experience' },
  { label: 'bi bi-file-earmark-text-fill', path: 'project' },
]

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.25,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

type Props = {
  data: About
}

const AboutMeClient = (props: Props) => {
  const { data } = props

  if (!data) return

  return (
    <motion.section
      initial={{ y: -30, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { ease: 'easeIn', duration: 0.5 },
      }}
      className="w-full px-5 sm:px-20 2xl:px-30 sm:py-10 min-h-screen sm:flex sm:justify-center sm:items-center"
    >
      <div className="w-full h-full flex flex-col xl:flex-row gap-10">
        <div className="w-full h-full flex flex-col-reverse xl:flex-row gap-10 mb-auto xl:sticky top-20 left-0 justify-center">
          <div className="flex flex-col gap-2 xl:w-2/5 2xl:w-2/6">
            <h1 className="font-extrabold text-xl md:text-2xl xl:text-3xl uppercase tracking-widest inline-block leading-none">
              About Me
            </h1>

            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-base leading-6 2xl:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi placeat fuga
                fugiat ratione temporibus blanditiis modi quis ex! Minus nemo quam fugiat,
                consectetur atque pariatur facere nam iusto omnis rerum!
              </p>
            </div>

            <motion.div
              className="h-[2px] bg-primary"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{
                scaleX: 1,
                originX: 0,
                transition: { delay: 0.5, duration: 0.5 },
              }}
              style={{ transformOrigin: 'left center' }}
            />

            <motion.ul
              className="flex gap-8"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {contactItems.map((item) => (
                <motion.li key={item.path} variants={itemVariants} className="transition-all link">
                  <i className={`${item.label} cursor-pointer text-2xl`}></i>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="grid xl:w-3/5 2xl:w-4/6 grid-cols-2 grid-rows-2 gap-2">
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
                      'transition-all row-span-2 w-full 2xl:w-fit h-full 2xl:h-full object-cover grayscale hover:grayscale-0 justify-self-end'

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
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutMeClient
