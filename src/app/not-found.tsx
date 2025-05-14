// app/not-found.tsx
'use client'
import { navItems } from '@/constants'
import { useLoadingStore } from '@/store/useLoadingStore'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const { setIsLoading } = useLoadingStore()
  const { push } = useRouter()

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
    </div>
  )
}
