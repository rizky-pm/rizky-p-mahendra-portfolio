'use client'

import React from 'react'
import { motion } from 'motion/react'

const LoadingPage = () => {
  return (
    <motion.div className="absolute h-screen w-full top-0 left-0 bg-primary flex items-center justify-center">
      <h1 className="text-white text-2xl tracking-wide">Loading...</h1>
    </motion.div>
  )
}

export default LoadingPage
