import { assertEquals } from 'jsr:@std/assert'
import { wordsTruncate } from './wordsTruncate.ts'

Deno.test('wordsTruncate: basic truncation', () => {
  const str = 'The quick brown fox jumps over the lazy dog'
  assertEquals(wordsTruncate(str, 4), 'The quick brown fox…')
  assertEquals(wordsTruncate(str, 5), 'The quick brown fox jumps…')
})

Deno.test('wordsTruncate: no truncation needed', () => {
  const str = 'hello world'
  assertEquals(wordsTruncate(str, 2), 'hello world')
  assertEquals(wordsTruncate(str, 3), 'hello world')
})

Deno.test('wordsTruncate: single word', () => {
  assertEquals(wordsTruncate('word', 1), 'word')
  assertEquals(wordsTruncate('word', 2), 'word')
})

Deno.test('wordsTruncate: n = 0 or negative', () => {
  const str = 'some text here'
  assertEquals(wordsTruncate(str, 0), '')
  assertEquals(wordsTruncate(str, -1), '')
})

Deno.test('wordsTruncate: custom ellipsis', () => {
  const str = 'one two three four five'
  assertEquals(wordsTruncate(str, 3, ' (...)'), 'one two three (...)')
})

Deno.test('wordsTruncate: handles extra whitespace', () => {
  const str = '   red   green  blue   yellow  '
  assertEquals(wordsTruncate(str, 2), 'red green…')
})

Deno.test('wordsTruncate: mixed whitespace types', () => {
  const str = 'one\ntwo\tthree\u2003four'
  assertEquals(wordsTruncate(str, 2), 'one two…')
})
