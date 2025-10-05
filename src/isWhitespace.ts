/**
 * Check if a character is a whitespace.
 *
 * @example
 * ```ts
 * import { isWhitespace } from '@utils/string'
 *
 * console.log(isWhitespace(' ')) // true
 * console.log(isWhitespace('\u00A0')) // true
 * console.log(isWhitespace('a')) // false
 * console.log(isWhitespace('中')) // false
 * ```
 *
 * @param char The input character.
 * @returns Whether the character is whitespace or not.
 */
export function isWhitespace(char: string): boolean {
  const whitespace = /\p{White_Space}/u

  return whitespace.test(char)
}
