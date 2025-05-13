'use client'

import React, { useMemo } from 'react'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { navItems } from '@/components/navbar'

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 2.5,
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const NavigationList = () => {
  const { push } = useRouter()

  const navigation = useMemo(() => {
    return navItems.filter((item) => item.path !== '/')
  }, [])

  return (
    <>
      <motion.ul
        className="container flex flex-col gap-2 md:gap-4 justify-between xl:flex-row"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {navigation.map((item) => (
          <motion.li
            key={item.path}
            className="text-3xl md:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl link uppercase text-primary cursor-pointer"
            variants={itemVariants}
            onClick={() => push(item.path)}
          >
            {item.label}
          </motion.li>
        ))}
      </motion.ul>
    </>
  )
}

export default NavigationList
