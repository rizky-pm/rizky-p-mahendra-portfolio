'use client'

import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLoadingStore } from '@/store/useLoadingStore'

const Loading = () => {
  const { isLoading } = useLoadingStore()

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute h-screen w-full bg-primary z-50 top-0 left-0 flex items-center justify-center"
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
            <h1 className="text-white text-2xl tracking-wide">Loading...</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Loading
