/**
 * Check if a character is printable (visible).
 *
 * @example
 * ```ts
 * import { isPrintable } from '@utils/string'
 *
 * console.log(isPrintable('a')) // true
 * console.log(isPrintable(' ')) // true
 * console.log(isPrintable('\u200B')) // false
 * console.log(isPrintable(\n')) // false
 * ```
 *
 * @param char The input character.
 * @returns Whether the character is visible or not.
 */
export function isPrintable(char: string): boolean {
  const invisible = /^[\p{Cc}\p{Cf}\p{Cs}\p{Co}\p{Cn}\p{Mn}\p{Me}\p{Zl}\p{Zp}]$/u;
  return !invisible.test(char);
}
