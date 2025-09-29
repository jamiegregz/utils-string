import { words } from './words.ts'

/**
 * Count words in a string, supports any whitespace character
 *
 * @example
 * ```ts
 * import { wordCount } from '@utils/string'
 *
 * console.log(wordCount('hello world')) // 2
 * ```
 *
 * @param str The string to count word from.
 * @returns number The number of words in the string.
 */
export function wordCount(str: string): number {
  return words(str).filter(Boolean).length
}
