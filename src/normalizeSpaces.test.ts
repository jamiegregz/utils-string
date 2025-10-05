import { assertEquals } from 'jsr:@std/assert'
import { normalizeSpaces } from './normalizeSpaces.ts'

Deno.test('normalizeSpaces: basic collapse', () => {
  assertEquals(normalizeSpaces('hello   world'), 'hello world')
})

Deno.test('normalizeSpaces: tabs and newlines', () => {
  assertEquals(normalizeSpaces('hello\tworld\nfoo'), 'hello world foo')
})

Deno.test('normalizeSpaces: non-breaking space', () => {
  assertEquals(normalizeSpaces('hello\u00A0world'), 'hello world')
})

Deno.test('normalizeSpaces: en and em spaces', () => {
  assertEquals(normalizeSpaces('foo\u2002bar\u2003baz'), 'foo bar baz')
})

Deno.test('normalizeSpaces: mixed whitespace variants', () => {
  assertEquals(normalizeSpaces('a\tb\u00A0c\u2003d'), 'a b c d')
})

Deno.test('normalizeSpaces: leading and trailing whitespace', () => {
  assertEquals(normalizeSpaces('   hello world   '), 'hello world')
})

Deno.test('normalizeSpaces: irregular spacing', () => {
  assertEquals(normalizeSpaces('one\u2009two   three\nfour'), 'one two three four')
})
