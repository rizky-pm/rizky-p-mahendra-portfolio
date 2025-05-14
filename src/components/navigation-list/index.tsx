'use client'

import React, { useMemo } from 'react'
import { motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import _ from 'lodash'
import { navItems } from '@/constants'

const NavigationList = () => {
  const pathname = usePathname()

  const navigation = useMemo(() => {
    if (pathname === '/') {
      return navItems.filter((item) => item.path !== '/')
    }

    return navItems
  }, [pathname])

  return (
    <>
      <motion.ul
        className="container flex flex-col gap-2 md:gap-4 justify-between xl:flex-row"
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 2.5,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {navigation.map((item) => (
          <motion.li
            key={item.path}
            className="text-3xl md:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl link uppercase text-primary cursor-pointer"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <Link href={item.path}>{item.label}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </>
  )
}

export default NavigationList
