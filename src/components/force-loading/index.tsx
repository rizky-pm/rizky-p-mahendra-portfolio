'use client'

import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLoadingStore } from '@/store/useLoadingStore'

// Start animation when user refresh or navigating using browser navigation
const ForceLoading = () => {
  const { isLoading } = useLoadingStore()

  return (
    <AnimatePresence>
      {!isLoading && (
        <motion.div
          className="fixed h-screen w-full bg-background z-50 top-0 left-0 flex items-center justify-center"
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
      )}
    </AnimatePresence>
  )
}

export default ForceLoading
