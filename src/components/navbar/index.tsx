'use client'

import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import { AnimatePresence, motion, Variants } from 'motion/react'
import { navItems } from '@/constants'
import { useLoadingStore } from '@/store/useLoadingStore'

const underlineVariants: Variants = {
  initial: { scaleX: 0 },
  active: { scaleX: 1 },
  hover: {
    scaleX: 1,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isLoading, setIsLoading } = useLoadingStore()
  const { push } = useRouter()
  const { isSmallScren } = useBreakpoints()

  useEffect(() => {
    let overflowResetTimeout: NodeJS.Timeout

    if (isMenuOpen || isLoading) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      document.body.style.overflow = 'hidden'
    } else {
      overflowResetTimeout = setTimeout(() => {
        document.body.style.overflow = ''
      }, 750)
    }

    return () => {
      clearTimeout(overflowResetTimeout)
    }
  }, [isMenuOpen, isLoading])

  return pathname !== '/' ? (
    <>
      <nav className="sm:fixed top-0 left-0 sm:flex sm:justify-center sm:items-center px-5 py-5 sm:py-0 sm:px-0 h-full">
        {isSmallScren ? (
          <ul className="flex flex-col gap-20 py-10 px-5 w-full h-full justify-center">
            {navItems.map((item) => {
              const isActive = pathname === item.path || pathname.startsWith(item.path + '/')

              return (
                <motion.li
                  key={item.path}
                  className="relative flex items-center flex-col font-bold cursor-pointer focus:outline-none group"
                  onClick={async () => {
                    setIsLoading(true)

                    await new Promise((resolve) => setTimeout(resolve, 500))

                    push(item.path)
                  }}
                  initial="initial"
                  whileHover="hover"
                  animate={isActive ? 'hover' : 'initial'}
                >
                  {item.icon}

                  <motion.div
                    variants={underlineVariants}
                    className="absolute bottom-[-6px] left-0 h-[2px] w-full bg-current origin-left"
                    style={{ transformOrigin: 'left' }}
                  />
                </motion.li>
              )
            })}
          </ul>
        ) : (
          <motion.i
            initial={{ x: -20, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { ease: 'easeIn', delay: 0.5, duration: 0.5 },
            }}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={25} />
          </motion.i>
        )}

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0, transition: { duration: 0.25, ease: 'easeInOut' } }}
              exit={{ x: '-100%', transition: { duration: 0.25, delay: 0.5, ease: 'easeInOut' } }}
              className="absolute  -foreground flex flex-col justify-center items-center top-0 left-0 h-screen w-screen bg-primary z-30"
            >
              <i
                className="absolute top-5 right-5 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={25} />
              </i>
              <ul className="flex flex-col items-center gap-10">
                {navItems.map((item) => (
                  <li key={item.path} className="relative group">
                    <button
                      onClick={async () => {
                        setIsLoading(true)
                        await new Promise((resolve) => setTimeout(resolve, 500))
                        setIsMenuOpen(false)
                        push(item.path)
                      }}
                      className="flex items-center gap-8 cursor-pointer focus:outline-none px-4 py-2"
                    >
                      <span className="text-4xl whitespace-nowrap uppercase">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  ) : null
}

export default Navbar
