import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './styles.css'
import Navbar from '@/components/navbar'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Rizky P. Mahendra | Portfolio',
  description: "Rizky's Portfolio",
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} antialiased flex flex-col sm:flex-row overflow-x-hidden`}
      >
        <Navbar />
        <main className="w-full flex justify-center">{children}</main>
      </body>
    </html>
  )
}
