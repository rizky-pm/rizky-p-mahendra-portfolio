'use client'

import React from 'react'
import { motion } from 'motion/react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Contact } from '@/payload-types'
import Image from 'next/image'

type Props = {
  contactDocs: Contact
}

const ContactClient = ({ contactDocs }: Props) => {
  console.log(contactDocs)

  return (
    <>
      <motion.div
        className="absolute z-20 h-screen w-full bg-primary"
        initial={{ y: 0 }}
        animate={{
          y: '-100%',
          transition: {
            ease: 'easeInOut',
            duration: 0.5,
            delay: 0.5,
          },
        }}
      />
      <motion.section
        initial={{ y: -30, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { ease: 'easeIn', duration: 0.5 },
        }}
        className="w-full md:min-h-screen px-5 sm:px-20 2xl:px-40 sm:py-10 2xl:py-20 sm:flex sm:flex-col sm:justify-center sm:items-center"
      >
        <div className="w-full container flex flex-col gap-10 mb-auto xl:sticky top-20 left-0 h-full md:justify-center">
          <div className="flex flex-col gap-4 xl:gap-8 xl:w-2/5">
            <h1 className="text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold uppercase text-primary">
              {contactDocs.title}
            </h1>

            <div className="flex flex-col gap-4">
              <RichText
                data={contactDocs.description}
                className="prose prose-sm sm:prose tracking-wide"
              />
            </div>

            <div className="flex items-center gap-8">
              {contactDocs.contactLinks.map((contact) => {
                const icon = contact.icon

                if (icon && typeof icon === 'object' && 'url' in icon) {
                  return (
                    <a
                      key={contact.id}
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer transition-all duration-300 underline xl:no-underline hover:scale-110"
                    >
                      <Image
                        width={512}
                        height={512}
                        src={icon.url as string}
                        alt={icon.alt || contact.platform}
                        className="w-8 h-8"
                      />
                    </a>
                  )
                }

                return null
              })}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default ContactClient
