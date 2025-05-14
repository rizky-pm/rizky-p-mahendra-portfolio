import React from 'react'
import Navbar from '@/app/(frontend)/components/navbar'
import Loading from '@/app/(frontend)/components/loading'

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
