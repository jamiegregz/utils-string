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
 * import { toSnakeCase } from '@utils/string'
 *
 * console.log(toSnakeCase('hello world')) // hello_world
 * console.log(toSnakeCase('HELLO-WORLD', { separator: '-' })) // hello_world
 * ```
 *
 * @param str The input string to convert.
 * @param options Optional settings to control conversion behavior.
 * @returns The converted string.
 */
export function toSnakeCase(str: string, options: Options = {}): string {
  const wordsArr = options.separator ? str.split(options.separator) : words(str)

  return wordsArr.map(word => word.toLowerCase()).join('_')
}
