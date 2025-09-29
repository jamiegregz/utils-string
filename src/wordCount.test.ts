import { assertEquals } from 'jsr:@std/assert'
import { wordCount } from './wordCount.ts'

Deno.test('wordCount: basic spaces', () => {
  assertEquals(wordCount('hello world'), 2)
  assertEquals(wordCount('  hello   world  '), 2)
})

Deno.test('wordCount: newlines and tabs', () => {
  assertEquals(wordCount('hello\nworld'), 2)
  assertEquals(wordCount('hello\tworld'), 2)
  assertEquals(wordCount('hello \n\t world'), 2)
})

Deno.test('wordCount: multiple whitespace types', () => {
  const str = 'hello\u00A0world\u2003wide\u2009web'
  assertEquals(wordCount(str), 4)
})

Deno.test('wordCount: leading/trailing whitespace', () => {
  assertEquals(wordCount('   hello world   '), 2)
  assertEquals(wordCount('\n\t hello world \u2003'), 2)
})

Deno.test('wordCount: empty or whitespace-only strings', () => {
  assertEquals(wordCount(''), 0)
  assertEquals(wordCount('   '), 0)
  assertEquals(wordCount('\u2003\u2009\u00A0'), 0)
})

Deno.test('wordCount: single word', () => {
  assertEquals(wordCount('word'), 1)
  assertEquals(wordCount('  word  '), 1)
})

Deno.test('wordCount: multiple consecutive spaces', () => {
  assertEquals(wordCount('one  two   three    four'), 4)
})

Deno.test('wordCount: CJK ideographic space', () => {
  const str = '你好\u3000世界' // uses U+3000 ideographic space
  assertEquals(wordCount(str), 2)
})

Deno.test('wordCount: mixed spaces, newlines, tabs', () => {
  const str = 'one\u00A0two\nthree\tfour\u2003five'
  assertEquals(wordCount(str), 5)
})
