import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './(frontend)/styles.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Rizky P. Mahendra | Not Found Page',
  description: "Rizky's Portfolio",
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className}`}>
        <main className="flex flex-col relative">{children}</main>
      </body>
    </html>
  )
}
