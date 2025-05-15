'use client'

import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import NavigationListFull from '@/components/navigation-list-full'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { useLoadingStore } from '@/store/useLoadingStore'
import Loading from '@/components/loading'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
})

const ErrorPage = ({ error }: { error: Error }) => {
  const { isLoading, setIsLoading } = useLoadingStore()

  useEffect(() => {
    const toggleLoading = async () => {
      setIsLoading(false)
    }

    toggleLoading()
  }, [setIsLoading])

  useEffect(() => {
    console.error('An error occurred:', error)
  }, [error])

  return (
    <main className={`flex flex-col relative ${plusJakartaSans.className}`}>
      <motion.div
        className="absolute h-screen w-full bg-background z-50 top-0 left-0 flex items-center justify-center"
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
        <h1 className="text-foreground text-6xl md:text-7xl xl:text-8xl 2xl:text-[10rem] tracking-wide uppercase font-bold">
          Loading
        </h1>
      </motion.div>
      <div className="min-h-screen flex flex-col justify-center items-center gap-10 w-full px-10 xl:px-0">
        <div className="container flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold uppercase  ">
            Oops!
          </h1>
          <p className="text-sm md:text-base xl:text-lg leading-relaxed  ">
            We encountered an unexpected issue. Please try again later.
          </p>
        </div>

        <NavigationListFull />
      </div>

      <Loading />
    </main>
  )
}

export default ErrorPage
