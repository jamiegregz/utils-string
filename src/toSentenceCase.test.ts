import { assertEquals } from 'jsr:@std/assert'
import { toSentenceCase } from './toSentenceCase.ts'

Deno.test('toSentenceCase: single word', () => {
  assertEquals(toSentenceCase('Hello'), 'Hello')
})

Deno.test('toSentenceCase: single word capitalised', () => {
  assertEquals(toSentenceCase('HELLO'), 'Hello')
})

Deno.test('toSentenceCase: single word lower case', () => {
  assertEquals(toSentenceCase('hello'), 'Hello')
})

Deno.test('toSentenceCase: multiple words', () => {
  assertEquals(toSentenceCase('hello world'), 'Hello world')
})

Deno.test('toSentenceCase: multiple words capitalised', () => {
  assertEquals(toSentenceCase('HELLO WORLD'), 'Hello world')
})

Deno.test('toSentenceCase: multiple words various whitespace separators', () => {
  assertEquals(toSentenceCase('hello\u00A0world'), 'Hello world')
  assertEquals(toSentenceCase('hello\u2003world'), 'Hello world')
  assertEquals(toSentenceCase('hello\u2009world'), 'Hello world')
})

Deno.test('toSentenceCase: multiple words custom separator', () => {
  assertEquals(toSentenceCase('hello-world', { separator: '-' }), 'Hello world')
})
