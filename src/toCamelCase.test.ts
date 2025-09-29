import { assertEquals } from 'jsr:@std/assert'
import { toCamelCase } from './toCamelCase.ts'

Deno.test('toCamelCase: single word', () => {
  assertEquals(toCamelCase('Hello'), 'hello')
})

Deno.test('toCamelCase: single word capitalised', () => {
  assertEquals(toCamelCase('HELLO'), 'hello')
})

Deno.test('toCamelCase: single word lower case', () => {
  assertEquals(toCamelCase('hello'), 'hello')
})

Deno.test('toCamelCase: multiple words', () => {
  assertEquals(toCamelCase('hello world'), 'helloWorld')
})

Deno.test('toCamelCase: multiple words capitalised', () => {
  assertEquals(toCamelCase('HELLO WORLD'), 'helloWorld')
})

Deno.test('toCamelCase: multiple words various whitespace separators', () => {
  assertEquals(toCamelCase('hello\u00A0world'), 'helloWorld')
  assertEquals(toCamelCase('hello\u2003world'), 'helloWorld')
  assertEquals(toCamelCase('hello\u2009world'), 'helloWorld')
})

Deno.test('toCamelCase: multiple words custom separator', () => {
  assertEquals(toCamelCase('hello-world', { separator: '-' }), 'helloWorld')
})
