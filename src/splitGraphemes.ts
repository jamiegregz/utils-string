/**
 * Split a string into visually distinct characters (grapheme clusters).
 *
 * @example
 * ```ts
 * import { splitGraphemes } from '@utils/string'
 *
 * console.log(splitGraphemes('hello')) // ['h','e','l','l','o']
 * console.log(splitGraphemes('café')) // ['c','a','f','é']
 * console.log(splitGraphemes('😃👍🏽👨‍👩‍👧‍👦')) // ['😃','👍🏽','👨‍👩‍👧‍👦']
 * console.log(splitGraphemes('1️⃣*️⃣')) // ['1️⃣','*️⃣']
 * ```
 *
 * @param str The input string.
 * @returns An array of grapheme clusters.
 */
export function splitGraphemes(str: string): string[] {
  if (!str) return []

  if (typeof Intl !== undefined && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' })
    return Array.from(segmenter.segment(str), s => s.segment)
  }

  return Array.from(str)
}
