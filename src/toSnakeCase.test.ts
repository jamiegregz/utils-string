import { assertEquals } from 'jsr:@std/assert'
import { toSnakeCase } from './toSnakeCase.ts'

Deno.test('toSnakeCase: single word', () => {
  assertEquals(toSnakeCase('Hello'), 'hello')
})

Deno.test('toSnakeCase: single word capitalised', () => {
  assertEquals(toSnakeCase('HELLO'), 'hello')
})

Deno.test('toSnakeCase: single word lower case', () => {
  assertEquals(toSnakeCase('hello'), 'hello')
})

Deno.test('toSnakeCase: multiple words', () => {
  assertEquals(toSnakeCase('hello world'), 'hello_world')
})

Deno.test('toSnakeCase: multiple words capitalised', () => {
  assertEquals(toSnakeCase('HELLO WORLD'), 'hello_world')
})

Deno.test('toSnakeCase: multiple words various whitespace separators', () => {
  assertEquals(toSnakeCase('hello\u00A0world'), 'hello_world')
  assertEquals(toSnakeCase('hello\u2003world'), 'hello_world')
  assertEquals(toSnakeCase('hello\u2009world'), 'hello_world')
})

Deno.test('toSnakeCase: multiple words custom separator', () => {
  assertEquals(toSnakeCase('hello-world', { separator: '-' }), 'hello_world')
})
