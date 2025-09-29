import { assertEquals } from 'jsr:@std/assert'
import { toTitleCase } from './toTitleCase.ts'

Deno.test('toTitleCase: single word', () => {
  assertEquals(toTitleCase('Hello'), 'Hello')
})

Deno.test('toTitleCase: single word capitalised', () => {
  assertEquals(toTitleCase('HELLO'), 'Hello')
})

Deno.test('toTitleCase: single word lower case', () => {
  assertEquals(toTitleCase('hello'), 'Hello')
})

Deno.test('toTitleCase: multiple words', () => {
  assertEquals(toTitleCase('hello world'), 'Hello World')
})

Deno.test('toTitleCase: multiple words capitalised', () => {
  assertEquals(toTitleCase('HELLO WORLD'), 'Hello World')
})

Deno.test('toTitleCase: multiple words various whitespace separators', () => {
  assertEquals(toTitleCase('hello\u00A0world'), 'Hello World')
  assertEquals(toTitleCase('hello\u2003world'), 'Hello World')
  assertEquals(toTitleCase('hello\u2009world'), 'Hello World')
})

Deno.test('toTitleCase: multiple words custom separator', () => {
  assertEquals(toTitleCase('hello-world', { separator: '-' }), 'Hello World')
})
