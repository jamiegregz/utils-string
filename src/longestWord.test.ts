import { assertEquals } from 'jsr:@std/assert'
import { longestWord } from './longestWord.ts'

Deno.test('longestWord: single word', () => {
  assertEquals(longestWord('hello'), 'hello')
})

Deno.test('longestWord: multiple words', () => {
  assertEquals(longestWord('the quick brown fox'), 'quick')
})

Deno.test('longestWord: multiple same length words', () => {
  assertEquals(longestWord('cat dog bat'), 'cat')
})

Deno.test('longestWord: handles extra spaces', () => {
  assertEquals(longestWord('   spaced   out   words   '), 'spaced')
})

Deno.test('longestWord: returns empty string for empty input', () => {
  assertEquals(longestWord(''), '')
})
