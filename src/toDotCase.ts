import { words } from './words.ts'

type Options = {
  /**
   * Custom separator to split the string into words.
   * If not provided, the string will be split using whitespace.
   */
  separator?: string
}

/**
 * Convert a string to dot case
 *
 * @example
 * ```ts
 * import { toDotCase } from '@utils/string'
 *
 * console.log(toDotCase('hello world')) // hello.world
 * console.log(toDotCase('HELLO-WORLD', { separator: '-' })) // hello.world
 * ```
 *
 * @param str The input string to convert.
 * @param options Optional settings to control conversion behavior.
 * @returns The converted string.
 */
export function toDotCase(str: string, options: Options = {}): string {
  const wordsArr = options.separator ? str.split(options.separator) : words(str)

  return wordsArr.map(word => word.toLowerCase()).join('.')
}


