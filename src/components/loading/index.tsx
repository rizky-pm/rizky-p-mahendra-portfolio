'use client'

import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLoadingStore } from '@/store/useLoadingStore'

const Loading = () => {
  const { isLoading } = useLoadingStore()

  useEffect(() => {
    let overflowResetTimeout: NodeJS.Timeout

    if (isLoading) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      document.body.style.overflow = 'hidden'
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      overflowResetTimeout = setTimeout(() => {
        document.body.style.overflow = ''
      }, 750)
    }

    return () => {
      clearTimeout(overflowResetTimeout)
    }
  }, [isLoading])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute h-screen w-full bg-background z-50 top-0 left-0 flex items-center justify-center"
            initial={{ y: '-100%' }}
            animate={{
              y: '0',
              transition: {
                ease: 'easeInOut',
                duration: 0.5,
              },
            }}
            exit={{
              y: '-100%',
              transition: {
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.5,
              },
            }}
          >
            <h1 className="text-foreground text-6xl md:text-7xl xl:text-8xl 2xl:text-[10rem] uppercase font-bold tracking-tighter">
              Loading
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Loading
