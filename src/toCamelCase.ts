import { words } from './words.ts'

type Options = {
  /**
   * Custom separator to split the string into words.
   * If not provided, the string will be split using whitespace.
   */
  separator?: string
}

/**
 * Convert a string to camel case.
 *
 * @example
 * ```ts
 * import { toCamelCase } from '@utils/string'
 *
 * console.log(toCamelCase('hello world')) // helloWorld
 * console.log(toCamelCase('HELLO_WORLD', { separator: '_' })) // helloWorld
 * ```
 *
 * @param str The input string to convert.
 * @param options Optional settings to control conversion behavior.
 * @returns The converted string.
 */
export function toCamelCase(str: string, options: Options = {}): string {
  const wordsArr = options.separator ? str.split(options.separator) : words(str)

  return wordsArr.map(
    (word, index) => index === 0
      ? word.toLowerCase()
      : word[0].toUpperCase() + word.slice(1).toLowerCase()
  ).join('')
}
