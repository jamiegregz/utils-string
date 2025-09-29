import { words } from './words.ts'

/**
 * Count the frequency of each word in a string, supports any whitespace character.
 *
 * @example
 * ```ts
 * import { wordFrequency } from '@utils/string'
 *
 * console.log(wordFrequency('one two two three one')) // { one: 2, two: 2, three: 1 }
 * ```
 *
 * @param str The string to count words from.
 * @returns A record mapping each word to its frequency.
 */
export function wordFrequency(str: string): Record<string, number> {
  const freq: Record<string, number> = {}
  const tokens = words(str)
  for (const word of tokens) {
    freq[word] = (freq[word] ?? 0) + 1
  }
  return freq
}
