import Loading from '@/components/loading'
import Navbar from '@/components/navbar'
import React from 'react'

export const metadata = {
  title: 'Rizky P. Mahendra | Portfolio',
  description: "Rizky's Portfolio",
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <>
      <Navbar />
      <main className="">{children}</main>
      <Loading />
    </>
  )
}
