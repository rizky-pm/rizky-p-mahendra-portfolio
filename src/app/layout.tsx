import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './(frontend)/styles.css'
import Loading from '@/components/loading'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className}`}>
        <Loading />
        <main className="flex flex-col relative">{children}</main>
      </body>
    </html>
  )
}
