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
      className={cn('rounded mx-5 md:mx-10 flex justify-center items-center', {
        'h-20 w-20 md:h-40 md:w-40 xl:h-50 xl:w-50': isBig,
        'h-10 w-10 md:h-20 md:w-20 xl:h-25 xl:w-25': !isBig,
      })}
    >
      {children}
    </div>
  )
}

export default TechStackIcon
