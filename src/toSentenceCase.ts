import { words } from './words.ts'

type Options = {
  /**
   * Custom separator to split the string into words.
   * If not provided, the string will be split using whitespace.
   */
  separator?: string
}

/**
 * Convert a string to sentence case.
 *
 * @example
 * ```ts
 * import { toSentenceCase } from '@utils/string'
 *
 * console.log(toSentenceCase('hello world')) // Hello world
 * console.log(toSentenceCase('HELLO_WORLD', { separator: '_' })) // Hello world
 * ```
 *
 * @param str The input string to convert.
 * @param options Optional settings to control conversion behavior.
 * @returns The converted string.
 */
export function toSentenceCase(str: string, options: Options = {}): string {
  const wordsArr = options.separator ? str.split(options.separator) : words(str)

  return wordsArr.map(
    (word, index) => index === 0
      ? word[0].toUpperCase() + word.slice(1).toLowerCase()
      : word.toLowerCase()
  ).join(' ')
}
