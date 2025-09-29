import { words } from './words.ts'

/**
 * Truncate a string to the specified number of words. Optionally append an ellipsis (default: '…').
 *
 * @example
 * ```ts
 * import { wordsTruncate } from '@utils/string'
 *
 * console.log(wordsTruncate('The quick brown fox jumps over the lazy dog', 4))
 * // 'The quick brown fox…'
 * ```
 *
 * @param str The input string.
 * @param n The maximum number of words to keep.
 * @param ellipsis The string to append if truncation occurs (default: '…').
 * @returns The truncated string.
 */
export function wordsTruncate(str: string, n: number, ellipsis: string = '…'): string {
  if (n <= 0) return ''
  const wordsArr = words(str)
  if (wordsArr.length <= n) return wordsArr.join(' ')
  return wordsArr.slice(0, n).join(' ') + ellipsis
}
