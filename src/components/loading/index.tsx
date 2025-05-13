'use client'

import React from 'react'
import { motion } from 'motion/react'

const Loading = () => {
  return (
    <motion.div
      className="absolute h-screen w-full bg-primary z-50 top-0 left-0 flex items-center justify-center"
      initial={{ y: 0 }}
      animate={{
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
  )
}

export default Loading
