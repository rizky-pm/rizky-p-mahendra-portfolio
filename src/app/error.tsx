'use client'

import React, { useEffect } from 'react'
import { navItems } from '@/components/navbar'
import Link from 'next/link'

const ErrorPage = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error('An error occurred:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10 w-full px-10 xl:px-0">
      <div className="container flex flex-col gap-2">
        <h1 className="text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold uppercase text-primary">
          Oops!
        </h1>
        <p className="text-sm md:text-base xl:text-lg leading-relaxed text-primary">
          We encountered an unexpected issue. Please try again later.
        </p>
      </div>

      <ul className="container flex flex-col gap-2 md:gap-4 justify-between xl:flex-row">
        {navItems.map((item) => (
          <li
            key={item.path}
            className="text-2xl md:text-3xl xl:text-4xl 3xl:text-6xl link uppercase text-primary cursor-pointer"
          >
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ErrorPage
