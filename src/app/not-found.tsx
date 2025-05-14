// app/not-found.tsx
'use client'

import { navItems } from '@/components/navbar'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10 w-full px-10 xl:px-0">
      <div className="container flex flex-col gap-2">
        <h1 className="text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold uppercase text-primary">
          404
        </h1>

        <p className="text-sm md:text-base xl:text-lg leading-relaxed text-primary">
          The page you&apos;re looking for doesn’t exist, may have been moved, or is temporarily
          unavailable.
        </p>
      </div>

      <ul className="container flex flex-col gap-2 md:gap-4 justify-between xl:flex-row">
        {navItems.map((item) => (
          <li
            key={item.path}
            className="text-3xl md:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl link uppercase text-primary cursor-pointer"
          >
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
