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
      <body className={`${plusJakartaSans.className} flex flex-col relative`}>
        <Loading />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
