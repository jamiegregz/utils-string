/**
 * Split all words in a string and return them as an array, supports any whitespace character.
 *
 * @example
 * ```ts
 * import { words } from '@utils/string'
 *
 * console.log(words('hello world')) // ['hello', 'world']
 * ```
 *
 * @param str The string to split word from.
 * @returns An array of individual words from the string.
 */
export function words(str: string): string[] {
  return str.trim().split(/\s+/u).filter(Boolean)
}

/**
 * Split all words in a string and return only unique words, preserving the first occurrence order.
 *
 * @example
 * ```ts
 * import { wordsUnique } from '@utils/string'
 *
 * console.log(wordsUnique('one two two three one')) // ['one', 'two', 'three']
 * ```
 *
 * @param str The string to split words from.
 * @returns An array of unique words from the string.
 */
export function wordsUnique(str: string): string[] {
  const result = new Set<string>()
  for (const word of words(str)) {
    result.add(word)
  }
  return [...result]
}
