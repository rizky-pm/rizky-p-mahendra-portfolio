'use client'

import React, { ReactNode } from 'react'

type Props = {
  left: ReactNode
  right: ReactNode
}

const ListLayout = ({ left, right }: Props) => {
  return (
    <section className="w-full px-5 sm:px-20 2xl:px-40 sm:py-10 2xl:py-20 sm:flex sm:justify-center sm:items-center">
      <div className="w-full container flex flex-col xl:flex-row gap-10">
        <div className="w-full flex flex-col gap-2 xl:w-2/5 2xl:w-2/6 mb-auto xl:sticky top-0 left-0">
          {left}
        </div>
        <div className="xl:w-3/5 2xl:w-4/6 flex flex-col gap-6">{right}</div>
      </div>
    </section>
  )
}

export default ListLayout
