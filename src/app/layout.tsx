import React from 'react'
import '@/app/(frontend)/styles.css'

const RootLayout = (props: { children: React.ReactNode }) => {
  const { children } = props
  return <>{children}</>
}

export default RootLayout
