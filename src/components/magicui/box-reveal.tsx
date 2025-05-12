'use client'

import { motion, useAnimation, useInView } from 'motion/react'
import { JSX, useEffect, useMemo, useRef } from 'react'

interface BoxRevealProps {
  children: JSX.Element
  width?: 'fit-content' | '100%'
  boxColor?: string
  duration?: number
  textDirection?: 'left' | 'right' | 'bottom' | 'top'
  delay?: number
}

export const BoxReveal = ({
  children,
  width = 'fit-content',
  boxColor = '#5046e6',
  duration,
  textDirection = 'left',
  delay = 0.25,
}: BoxRevealProps) => {
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const directionConfig = useMemo(() => {
    switch (textDirection) {
      case 'left':
        return {
          x: -75,
        }

      case 'right':
        return {
          x: 75,
        }

      case 'bottom':
        return {
          y: -75,
        }

      case 'top':
        return {
          y: 75,
        }

      default:
        return {
          x: -75,
        }
    }
  }, [textDirection])

  const boxVariants = {
    hidden: {
      [textDirection]: 0,
    },
    visible: {
      [textDirection]: '100%',
    },
  }

  useEffect(() => {
    if (isInView) {
      slideControls.start('visible')
      mainControls.start('visible')
    } else {
      slideControls.start('hidden')
      mainControls.start('hidden')
    }
  }, [isInView, mainControls, slideControls])

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, ...directionConfig },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration ? duration : 1.5, delay: delay }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: boxVariants.hidden,
          visible: boxVariants.visible,
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: duration ? duration : 1.5,
          ease: 'easeInOut',
          delay: delay,
        }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor,
        }}
      />
    </div>
  )
}
