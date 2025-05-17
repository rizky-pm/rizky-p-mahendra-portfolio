'use client'

import { useBreakpoints } from '@/hooks/useBreakpoints'
import Image from 'next/image'
import React from 'react'
import BackgroundPotrait from '@/assets/illustrations/background-potrait.png'
import BackgroundLandscape from '@/assets/illustrations/background-landscape.png'

const Background = () => {
  const { isExtraLargeScreen } = useBreakpoints()
  return (
    <Image
      width={500}
      height={500}
      src={isExtraLargeScreen ? BackgroundLandscape : BackgroundPotrait}
      alt="background illustration"
      className="h-full w-full fixed top-0 left-0 -z-50 opacity-15"
    />
  )
}

export default Background
