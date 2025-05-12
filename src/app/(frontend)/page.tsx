'use client'

import React from 'react'
import './styles.css'
import { motion } from 'motion/react'
import { BoxReveal } from '@/components/magicui/box-reveal'
import NavigationList from './navigation-list'

const boxColor = 'oklch(0.208 0.042 265.755)'
const revealDelay = 1.25

export default function HomePage() {
  return (
    <section className="relative flex h-screen w-full flex-col">
      <motion.div
        className="absolute z-20 h-screen w-full bg-primary"
        initial={{ y: 0 }}
        animate={{
          y: '-100%',
          transition: {
            ease: 'easeInOut',
            duration: 0.5,
            delay: 0.5,
          },
        }}
      />

      <div className="h-full flex flex-col justify-center items-center gap-10 xl:gap-20 w-full px-10 xl:px-0">
        <div className="container flex flex-col gap-2">
          <BoxReveal textDirection="right" boxColor={boxColor} delay={revealDelay}>
            <h1 className="text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold uppercase text-primary">
              Rizky Putra Mahendra
            </h1>
          </BoxReveal>

          <BoxReveal textDirection="right" boxColor={boxColor} delay={revealDelay}>
            <p className="text-lg md:text-xl xl:text-2xl font-semibold uppercase tracking-widest text-primary">
              Front end Developer
            </p>
          </BoxReveal>

          <BoxReveal boxColor={boxColor} delay={revealDelay}>
            <p className="text-sm md:text-base xl:text-lg leading-relaxed text-primary">
              Experienced with over 2 years, I bring a strong focus on detail, performance, and
              clean design. With a background in frontend and a growing interest in full-stack, I
              strive to build intuitive and impactful digital experiences.
            </p>
          </BoxReveal>
        </div>

        <NavigationList />
      </div>
    </section>
  )
}

// import { headers as getHeaders } from 'next/headers.js'
// import Image from 'next/image'
// import { getPayload } from 'payload'
// import React from 'react'
// import { fileURLToPath } from 'url'

// import config from '@/payload.config'
// import './styles.css'

// export default async function HomePage() {
//   const headers = await getHeaders()
//   const payloadConfig = await config
//   const payload = await getPayload({ config: payloadConfig })
//   const { user } = await payload.auth({ headers })

//   const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

//   return (
//     <div className="home">
//       <div className="content">
//         <picture>
//           <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
//           <Image
//             alt="Payload Logo"
//             height={65}
//             src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
//             width={65}
//           />
//         </picture>
//         {!user && <h1>Welcome to your new project.</h1>}
//         {user && <h1>Welcome back, {user.email}</h1>}
//         <div className="links">
//           <a
//             className="admin"
//             href={payloadConfig.routes.admin}
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             Go to admin panel
//           </a>
//           <a
//             className="docs"
//             href="https://payloadcms.com/docs"
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             Documentation
//           </a>
//         </div>
//       </div>
//       <div className="footer">
//         <p>Update this page by editing</p>
//         <a className="codeLink" href={fileURL}>
//           <code>app/(frontend)/page.tsx</code>
//         </a>
//       </div>
//     </div>
//   )
// }
