import { assertEquals } from 'jsr:@std/assert'
import { words, wordsUnique } from './words.ts'

Deno.test('words: basic spaces', () => {
  assertEquals(words('hello world'), ['hello', 'world'])
  assertEquals(words('  hello   world  '), ['hello', 'world'])
})

Deno.test('words: newlines and tabs', () => {
  assertEquals(words('hello\nworld'), ['hello', 'world'])
  assertEquals(words('hello\tworld'), ['hello', 'world'])
  assertEquals(words('hello \n\t world'), ['hello', 'world'])
})

Deno.test('words: multiple whitespace types', () => {
  const str = 'hello\u00A0world\u2003wide\u2009web'
  assertEquals(words(str), ['hello', 'world', 'wide', 'web'])
})

Deno.test('words: leading/trailing whitespace', () => {
  assertEquals(words('   hello world   '), ['hello', 'world'])
  assertEquals(words('\n\t hello world \u2003'), ['hello', 'world'])
})

Deno.test('words: empty or whitespace-only strings', () => {
  assertEquals(words(''), [])
  assertEquals(words('   '), [])
  assertEquals(words('\u2003\u2009\u00A0'), [])
})

Deno.test('words: single word', () => {
  assertEquals(words('word'), ['word'])
  assertEquals(words('  word  '), ['word'])
})

Deno.test('words: multiple consecutive spaces', () => {
  assertEquals(words('one  two   three    four'), ['one', 'two', 'three', 'four'])
})

Deno.test('words: CJK ideographic space', () => {
  const str = '你好\u3000世界' // uses U+3000 ideographic space
  assertEquals(words(str), ['你好', '世界'])
})

Deno.test('words: mixed spaces, newlines, tabs', () => {
  const str = 'one\u00A0two\nthree\tfour\u2003five'
  assertEquals(words(str), ['one', 'two', 'three', 'four', 'five'])
})

Deno.test('wordsUnique: removes duplicates', () => {
  assertEquals(wordsUnique('one two two three one'), ['one', 'two', 'three'])
})

Deno.test('wordsUnique: preserves order of first occurrence', () => {
  assertEquals(wordsUnique('apple banana apple cherry banana'), ['apple', 'banana', 'cherry'])
})

Deno.test('wordsUnique: handles whitespace correctly', () => {
  assertEquals(wordsUnique('  red   red   blue   green  '), ['red', 'blue', 'green'])
})

Deno.test('wordsUnique: empty or whitespace-only strings', () => {
  assertEquals(wordsUnique(''), [])
  assertEquals(wordsUnique('   '), [])
  assertEquals(wordsUnique('\u2003\u2009\u00A0'), [])
})

Deno.test('wordsUnique: single word', () => {
  assertEquals(wordsUnique('word'), ['word'])
  assertEquals(wordsUnique('  word  '), ['word'])
})
