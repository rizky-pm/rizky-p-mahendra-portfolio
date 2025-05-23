import { Metadata } from 'next'

type Options = {
  title?: string
  description: string
}

export const generateMeta = async ({ title, description }: Options): Promise<Metadata> => {
  return {
    title: title ? `Rizky Putra Mahendra - ${title}` : 'Rizky Putra Mahendra',
    description: description,
  }
}
