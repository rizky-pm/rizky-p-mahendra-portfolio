// app/not-found.tsx
'use client'

import NavigationList from './(frontend)/navigation-list'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10 xl:gap-20 w-full px-10 xl:px-0">
      <div className="container flex flex-col gap-2">
        <h1 className="text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold uppercase text-primary">
          404
        </h1>

        {/* Optional: Show error details for support or logging */}

        <p className="text-sm md:text-base xl:text-lg leading-relaxed text-primary">
          The page you&apos;re looking for doesn’t exist, may have been moved, or is temporarily
          unavailable.
        </p>
      </div>
      <NavigationList />
    </div>
  )
}
