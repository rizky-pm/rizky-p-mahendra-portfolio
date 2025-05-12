'use client'
import React from 'react'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'

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

const navigation = [
  {
    path: '/',
    label: 'Main',
  },
  {
    path: '/about-me',
    label: 'About Me',
  },
  {
    path: '/experience',
    label: 'Experience',
  },
  {
    path: '/project',
    label: 'Project',
  },
]

const NavigationList = () => {
  const { push } = useRouter()
  return (
    <motion.ul
      className="container flex flex-col gap-2 justify-between xl:flex-row"
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {navigation.map((item) => (
        <motion.li
          key={item.path}
          className="text-3xl md:text-5xl xl:text-5xl 2xl:text-6xl link uppercase text-primary"
          variants={itemVariants}
          onClick={() => push(item.path)}
        >
          {item.label}
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default NavigationList
