import { assertEquals } from 'jsr:@std/assert'
import { toPascalCase } from './toPascalCase.ts'

Deno.test('toPascalCase: single word', () => {
  assertEquals(toPascalCase('Hello'), 'Hello')
})

Deno.test('toPascalCase: single word capitalised', () => {
  assertEquals(toPascalCase('HELLO'), 'Hello')
})

Deno.test('toPascalCase: single word lower case', () => {
  assertEquals(toPascalCase('hello'), 'Hello')
})

Deno.test('toPascalCase: multiple words', () => {
  assertEquals(toPascalCase('hello world'), 'HelloWorld')
})

Deno.test('toPascalCase: multiple words capitalised', () => {
  assertEquals(toPascalCase('HELLO WORLD'), 'HelloWorld')
})

Deno.test('toPascalCase: multiple words various whitespace separators', () => {
  assertEquals(toPascalCase('hello\u00A0world'), 'HelloWorld')
  assertEquals(toPascalCase('hello\u2003world'), 'HelloWorld')
  assertEquals(toPascalCase('hello\u2009world'), 'HelloWorld')
})

Deno.test('toPascalCase: multiple words custom separator', () => {
  assertEquals(toPascalCase('hello-world', { separator: '-' }), 'HelloWorld')
})
