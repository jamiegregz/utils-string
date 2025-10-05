/**
 * Check if a character is an emoji.
 *
 * @example
 * ```ts
 * import { isEmoji } from '@utils/string'
 *
 * console.log(isEmoji('👋🏻')) // true
 * console.log(isEmoji('🏴󠁧󠁢󠁥󠁮󠁧󠁿')) // true
 * console.log(isEmoji('1️⃣')) // true
 * console.log(isEmoji('a')) // false
 * console.log(isEmoji('中')) // false
 * ```
 *
 * @param char The input character.
 * @returns Whether the character is an emoji or not.
 */
export function isEmoji(char: string): boolean {
  const emoji = /\p{Extended_Pictographic}|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu

  return emoji.test(char)
}
