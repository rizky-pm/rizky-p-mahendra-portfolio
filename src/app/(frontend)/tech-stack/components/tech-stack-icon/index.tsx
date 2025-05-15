'use client'

import { cn } from '@/lib/utils'

interface IProps {
  children: React.ReactNode
  isBig: boolean
}

const TechStackIcon = (props: IProps) => {
  const { children, isBig } = props

  return (
    <div
      className={cn('rounded mx-5 my-5 xl:my-0 md:mx-10 flex justify-center items-center', {
        'h-20 w-20 md:h-32 md:w-32 xl:h-36 xl:w-36 3xl:h-44 3xl:w-44': isBig,
        'h-16 w-16 md:h-24 md:w-24 xl:h-28 xl:w-28 3xl:h-36 3xl:w-36': !isBig,
      })}
    >
      {children}
    </div>
  )
}

export default TechStackIcon
