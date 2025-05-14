'use client'

import { navItems } from '@/constants'
import { useLoadingStore } from '@/store/useLoadingStore'
import { useRouter } from 'next/navigation'
import React from 'react'

const NavigationListFull = () => {
  const { setIsLoading } = useLoadingStore()
  const { push } = useRouter()
  return (
    <ul className="container flex flex-col gap-2 md:gap-4 justify-between xl:flex-row">
      {navItems.map((item) => (
        <li
          key={item.path}
          className="text-2xl md:text-3xl xl:text-4xl 3xl:text-6xl link uppercase text-primary cursor-pointer"
          onClick={async () => {
            setIsLoading(true)
            await new Promise((resolve) => setTimeout(resolve, 500))
            push(item.path)
          }}
        >
          {item.label}
        </li>
      ))}
    </ul>
  )
}

export default NavigationListFull
