import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './styles.css'
import Loading from '@/components/loading'
import Navbar from '@/components/navbar'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className}`}>
        <Loading />
        <main>{children}</main>
        <Navbar />
      </body>
    </html>
  )
}
