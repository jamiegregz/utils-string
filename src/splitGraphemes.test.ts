import { assertEquals } from 'jsr:@std/assert'
import { splitGraphemes } from './splitGraphemes.ts'

Deno.test('splitGraphemes: basic letters', () => {
  assertEquals(splitGraphemes('hello'), ['h','e','l','l','o'])
})

Deno.test('splitGraphemes: accented characters', () => {
  assertEquals(splitGraphemes('café'), ['c','a','f','é'])
  assertEquals(splitGraphemes('e\u0301'), ['é'])
})

Deno.test('splitGraphemes: emojis', () => {
  assertEquals(splitGraphemes('😃👍🏽👨‍👩‍👧‍👦'), ['😃','👍🏽','👨‍👩‍👧‍👦'])
})

Deno.test('splitGraphemes: mixed text and emoji', () => {
  assertEquals(splitGraphemes('Hi 😃!'), ['H','i',' ','😃','!'])
})

Deno.test('splitGraphemes: keycaps', () => {
  assertEquals(splitGraphemes('1️⃣*️⃣'), ['1️⃣','*️⃣'])
})
