// app/not-found.tsx
'use client'

import NavigationList from './(frontend)/navigation-list'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8 h-screen">
      <h1 className="text-9xl uppercase font-bold mb-4">404 - Page Not Found</h1>

      <NavigationList />
    </div>
  )
}
