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
        {!isLoading && (
          <motion.div
            className="absolute h-screen w-full flex-col bg-background z-50 top-0 left-0 flex items-center justify-center"
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
    </>
  )
}

export default Loading

// 'use client'

// import React, { useEffect, useRef, useState } from 'react'
// import { AnimatePresence, motion } from 'motion/react'
// import { useLoadingStore } from '@/store/useLoadingStore'

// const Loading = () => {
//   const { isLoading } = useLoadingStore()
//   const headingRef = useRef<HTMLHeadingElement>(null)
//   const [underlineWidth, setUnderlineWidth] = useState(0)

//   useEffect(() => {
//     let overflowResetTimeout: NodeJS.Timeout

//     if (isLoading) {
//       window.scrollTo({ top: 0, behavior: 'smooth' })
//       document.body.style.overflow = 'hidden'
//     } else {
//       window.scrollTo({ top: 0, behavior: 'smooth' })
//       overflowResetTimeout = setTimeout(() => {
//         document.body.style.overflow = ''
//       }, 750)
//     }

//     return () => {
//       clearTimeout(overflowResetTimeout)
//     }
//   }, [isLoading])

//   useEffect(() => {
//     if (headingRef.current) {
//       setUnderlineWidth(headingRef.current.offsetWidth)
//     }
//   }, [])

//   return (
//     <>
//       <AnimatePresence>
//         {isLoading && (
//           <motion.div
//             className="fixed h-screen w-full bg-background z-50 top-0 left-0 flex items-center justify-center flex-col"
//             initial={{ y: '-100%' }}
//             animate={{
//               y: '0',
//               transition: {
//                 ease: 'easeInOut',
//                 duration: 0.5,
//               },
//             }}
//             exit={{
//               y: '-100%',
//               transition: {
//                 ease: 'easeInOut',
//                 duration: 0.5,
//                 delay: 0.5,
//               },
//             }}
//           >
//             <div className="flex justify-between w-auto">
//               <motion.div
//                 initial={{ scaleY: 0 }}
//                 animate={{ scaleY: [0, 1, 0] }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   repeatType: 'loop',
//                   ease: 'linear',
//                 }}
//                 className="w-4 h-14 bg-foreground origin-bottom"
//               />
//               <motion.div
//                 initial={{ scaleY: 0 }}
//                 animate={{ scaleY: [0, 0.4, 0] }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   repeatType: 'loop',
//                   ease: 'linear',
//                 }}
//                 className="w-4 h-14 bg-foreground origin-bottom"
//               />
//               <motion.div
//                 initial={{ scaleY: 0 }}
//                 animate={{ scaleY: [0, 0.8, 0] }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   repeatType: 'loop',
//                   ease: 'linear',
//                 }}
//                 className="w-4 h-14 bg-foreground origin-bottom"
//               />
//             </div>

//             <h1
//               ref={headingRef}
//               className="text-foreground text-xl md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold"
//             >
//               loading...
//             </h1>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// export default Loading
