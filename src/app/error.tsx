'use client'

import React, { useEffect } from 'react'
import NavigationList from './(frontend)/navigation-list'

const ErrorPage = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error('An error occurred:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10 xl:gap-20 w-full px-10 xl:px-0">
      <div className="container flex flex-col gap-2">
        <h1 className="text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold uppercase text-primary">
          Something Went Wrong
        </h1>
        <p className="text-sm md:text-base xl:text-lg leading-relaxed text-primary">
          We encountered an unexpected issue. Please try again later.
        </p>

        {/* Optional: Show error details for support or logging */}
        <div className="text-sm mb-10">
          <strong>Error ID:</strong> {error.message || 'Unknown error'}
        </div>

        {/* Navigation List */}
        <NavigationList />
      </div>
    </div>
  )
}

export default ErrorPage
