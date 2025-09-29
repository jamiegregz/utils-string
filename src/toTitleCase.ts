import { words } from './words.ts'

type Options = {
  /**
   * Custom separator to split the string into words.
   * If not provided, the string will be split using whitespace.
   */
  separator?: string
}

/**
 * Convert a string to title case.
 *
 * @example
 * ```ts
 * import { toTitleCase } from '@utils/string'
 *
 * console.log(toTitleCase('hello world')) // Hello World
 * console.log(toTitleCase('HELLO_WORLD', { separator: '_' })) // Hello World
 * ```
 *
 * @param str The input string to convert.
 * @param options Optional settings to control conversion behavior.
 * @returns The converted string.
 */
export function toTitleCase(str: string, options: Options = {}): string {
  const wordsArr = options.separator ? str.split(options.separator) : words(str)

  return wordsArr.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')
}
