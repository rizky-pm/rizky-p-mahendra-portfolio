import React from 'react'

const RootLayout = (props: { children: React.ReactNode }) => {
  const { children } = props
  return <>{children}</>
}

export default RootLayout
