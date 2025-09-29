import { words } from './words.ts'

/**
 * Returns the longest word in a string. If multiple words have the same maximum length, the first is returned.
 *
 * @example
 * ```ts
 * import { longestWord } from '@utils/string'
 *
 * console.log(longestWord('hello worlds')) // worlds
 * ```
 *
 * @param str The input string.
 * @returns The longest word in the string.
 */
export function longestWord(str: string): string {
  let longest = ''

  for (const word of words(str)) {
    if (word.length > longest.length) {
      longest = word
    }
  }

  return longest
}
