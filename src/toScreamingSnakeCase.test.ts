import { assertEquals } from 'jsr:@std/assert'
import { toScreamingSnakeCase } from './toScreamingSnakeCase.ts'

Deno.test('toScreamingSnakeCase: single word', () => {
  assertEquals(toScreamingSnakeCase('Hello'), 'HELLO')
})

Deno.test('toScreamingSnakeCase: single word capitalised', () => {
  assertEquals(toScreamingSnakeCase('HELLO'), 'HELLO')
})

Deno.test('toScreamingSnakeCase: single word lower case', () => {
  assertEquals(toScreamingSnakeCase('hello'), 'HELLO')
})

Deno.test('toScreamingSnakeCase: multiple words', () => {
  assertEquals(toScreamingSnakeCase('hello world'), 'HELLO_WORLD')
})

Deno.test('toScreamingSnakeCase: multiple words capitalised', () => {
  assertEquals(toScreamingSnakeCase('HELLO WORLD'), 'HELLO_WORLD')
})

Deno.test('toScreamingSnakeCase: multiple words various whitespace separators', () => {
  assertEquals(toScreamingSnakeCase('hello\u00A0world'), 'HELLO_WORLD')
  assertEquals(toScreamingSnakeCase('hello\u2003world'), 'HELLO_WORLD')
  assertEquals(toScreamingSnakeCase('hello\u2009world'), 'HELLO_WORLD')
})

Deno.test('toScreamingSnakeCase: multiple words custom separator', () => {
  assertEquals(toScreamingSnakeCase('hello-world', { separator: '-' }), 'HELLO_WORLD')
})
