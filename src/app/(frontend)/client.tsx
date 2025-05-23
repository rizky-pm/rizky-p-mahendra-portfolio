'use client'

import React, { useEffect } from 'react'
import './styles.css'
import { Hero } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { useLoadingStore } from '@/store/useLoadingStore'
import { BoxReveal } from '@/components/magicui/box-reveal'
import NavigationList from '@/components/navigation-list'
import ForceLoading from '@/components/force-loading'

const boxColor = '#343A40'
const revealDelay = 1.25

type Props = {
  data: Hero
}

export default function HomePageClient(props: Props) {
  const { data } = props

  const { setIsLoading } = useLoadingStore()

  useEffect(() => {
    const toggleLoading = async () => {
      setIsLoading(false)
    }

    toggleLoading()
  }, [setIsLoading])

  return data ? (
    <>
      <ForceLoading />
      <div className="h-full flex flex-col justify-center items-center gap-10 w-full px-10 xl:px-0">
        <div className="container flex flex-col gap-2 -z-50">
          <BoxReveal textDirection="right" boxColor={boxColor} delay={revealDelay}>
            <h1 className="text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold uppercase">
              {data.title}
            </h1>
          </BoxReveal>

          <BoxReveal textDirection="right" boxColor={boxColor} delay={revealDelay}>
            <p className="text-lg md:text-xl xl:text-2xl font-semibold uppercase tracking-widest">
              {data.subtitle}
            </p>
          </BoxReveal>

          <BoxReveal boxColor={boxColor} delay={revealDelay}>
            <RichText
              data={data.description}
              className="text-sm md:text-base xl:text-lg leading-relaxed"
            />
          </BoxReveal>
        </div>

        <NavigationList />
      </div>
    </>
  ) : null
}
