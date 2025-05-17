'use client'

import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLoadingStore } from '@/store/useLoadingStore'

// Start animation when user refresh or navigating using browser navigation
const ForceLoading = () => {
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
    <AnimatePresence>
      {!isLoading && (
        <motion.div
          className="absolute h-screen w-full flex-col bg-background z-50 top-0 left-0 flex items-center justify-center"
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
          <div className="flex justify-between gap-2">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0, 1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
                delay: 0,
              }}
              className="w-4 h-24 bg-foreground origin-center"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0, 1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
                delay: 0.4,
              }}
              className="w-4 h-24 bg-foreground origin-center"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0, 1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
                delay: 0.3,
              }}
              className="w-4 h-24 bg-foreground origin-center"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0, 1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
                delay: 0.2,
              }}
              className="w-4 h-24 bg-foreground origin-center"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ForceLoading
