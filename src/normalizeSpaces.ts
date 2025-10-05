import { words } from './words.ts'

/**
 * Collapse all whitespace variants (including NBSP, en/em spaces) into a single space.
 *
 * @example
 * ```ts
 * import { normalizeSpaces } from '@utils/string'
 *
 * console.log(normalizeSpaces('hello\u00A0world')) // hello world
 * ```
 *
 * @param str The input string.
 * @returns The string with all space variants collapsed
 */
export function normalizeSpaces(str: string): string {
  return words(str).join(' ')
}
