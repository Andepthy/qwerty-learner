import type { Word } from '@/typings'

export async function wordListFetcher(url: string): Promise<Word[]> {
  const normalizedUrl = url.replace(/^\.?\//, '')
  const response = await fetch(`${import.meta.env.BASE_URL}${normalizedUrl}`)

  const words: Word[] = await response.json()
  return words
}
