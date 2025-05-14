'use client'

import React, { useEffect } from 'react'
import { motion } from 'motion/react'
import NavigationListFull from '@/components/navigation-list-full'

const ErrorPage = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error('An error occurred:', error)
  }, [error])

  return (
    <>
      <motion.div
        className="absolute h-screen w-full bg-primary z-50 top-0 left-0 flex items-center justify-center"
        initial={{ y: 0 }}
        animate={{
          y: '-100%',
          transition: {
            ease: 'easeInOut',
            delay: 0.5,
            duration: 0.5,
          },
        }}
      >
        <h1 className="text-white text-2xl tracking-wide">Loading...</h1>
      </motion.div>
      <div className="min-h-screen flex flex-col justify-center items-center gap-10 w-full px-10 xl:px-0">
        <div className="container flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold uppercase text-primary">
            Oops!
          </h1>
          <p className="text-sm md:text-base xl:text-lg leading-relaxed text-primary">
            We encountered an unexpected issue. Please try again later.
          </p>
        </div>

        <NavigationListFull />
      </div>
    </>
  )
}

export default ErrorPage
