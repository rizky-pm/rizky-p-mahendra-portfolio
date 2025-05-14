import ForceLoading from '@/components/force-loading'
import NavigationListFull from '@/components/navigation-list-full'
import { generateMeta } from '@/lib/seo/generateMetaData'

export const generateMetadata = async () =>
  generateMeta({
    title: 'Not Found',
    description:
      "The page you're looking for doesn't exist or may have been moved. Please check the URL or return to the homepage.",
  })

export default async function NotFound() {
  return (
    <>
      <ForceLoading />
      <div className="min-h-screen flex flex-col justify-center items-center gap-10 w-full px-10 xl:px-0">
        <div className="container flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold uppercase  ">
            404
          </h1>

          <p className="text-sm md:text-base xl:text-lg leading-relaxed  ">
            The page you&apos;re looking for doesn’t exist, may have been moved, or is temporarily
            unavailable.
          </p>
        </div>

        <NavigationListFull />
      </div>
    </>
  )
}
