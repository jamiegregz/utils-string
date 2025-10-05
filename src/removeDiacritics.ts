/**
 * Remove diacritics (accents) from a string.
 *
 * @example
 * ```ts
 * import { removeDiacritics } from '@utils/string'
 *
 * console.log(removeDiacritics('café')) // cafe
 * console.log(removeDiacritics('fiancée')) // fiancee
 * console.log(removeDiacritics('über')) // uber
 * console.log(removeDiacritics('ñoño')) // nono
 * ```
 *
 * @param str The input string.
 * @returns The string without diacritics.
 */
export function removeDiacritics(str: string): string {
  if (!str) return ''

  return str.normalize('NFD').replace(/\p{Mn}/gu, '')
}
