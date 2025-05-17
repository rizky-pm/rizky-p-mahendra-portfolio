'use client'

import React, { useEffect } from 'react'
import { motion } from 'motion/react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Contact } from '@/payload-types'
import { useLoadingStore } from '@/store/useLoadingStore'
import ForceLoading from '@/components/force-loading'
import LinkedInIcon from '@/assets/linkedin-icon'
import GithubIcon from '@/assets/github-icon'
import GmailIcon from '@/assets/gmail-icon'
import GoogleDriveIcon from '@/assets/google-drive-icon'
import _ from 'lodash'

type Props = {
  contactDocs: Contact
}

const ContactClient = ({ contactDocs }: Props) => {
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
        <div className="w-full container flex flex-col gap-10 xl:sticky xl:mb-auto top-20 left-0 h-full">
          <div className="flex flex-col gap-4 xl:gap-8 xl:w-2/4">
            <h1 className="text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold uppercase  ">
              {contactDocs.title}
            </h1>

            <div className="flex flex-col gap-4">
              <RichText
                data={contactDocs.description}
                className="prose-sm 2xl:prose 3xl:prose-xl tracking-wide"
              />
            </div>

            <div className="flex items-center gap-8">
              {contactDocs.contactLinks.map((contact) => {
                return (
                  <a
                    key={contact.id}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer transition-all duration-300 underline xl:no-underline hover:scale-110"
                  >
                    {renderIcon(contact.platform)}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

const renderIcon = (platform: string) => {
  switch (_.toLower(platform)) {
    case 'linkedin':
      return <LinkedInIcon className="w-8 h-8 2xl:w-10 2xl:h-10 text-background" />

    case 'github':
      return <GithubIcon className="w-8 h-8 2xl:w-10 2xl:h-10 text-background" />

    case 'email':
      return <GmailIcon className="w-8 h-8 2xl:w-10 2xl:h-10 text-background" />

    case 'resume':
      return <GoogleDriveIcon className="w-8 h-8 2xl:w-10 2xl:h-10 text-background" />

    default:
      break
  }
}

export default ContactClient
