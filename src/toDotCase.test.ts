import { assertEquals } from 'jsr:@std/assert'
import { toDotCase } from './toDotCase.ts'

Deno.test('toDotCase: single word', () => {
  assertEquals(toDotCase('Hello'), 'hello')
})

Deno.test('toDotCase: single word capitalised', () => {
  assertEquals(toDotCase('HELLO'), 'hello')
})

Deno.test('toDotCase: single word lower case', () => {
  assertEquals(toDotCase('hello'), 'hello')
})

Deno.test('toDotCase: multiple words', () => {
  assertEquals(toDotCase('hello world'), 'hello.world')
})

Deno.test('toDotCase: multiple words capitalised', () => {
  assertEquals(toDotCase('HELLO WORLD'), 'hello.world')
})

Deno.test('toDotCase: multiple words various whitespace separators', () => {
  assertEquals(toDotCase('hello\u00A0world'), 'hello.world')
  assertEquals(toDotCase('hello\u2003world'), 'hello.world')
  assertEquals(toDotCase('hello\u2009world'), 'hello.world')
})

Deno.test('toDotCase: multiple words custom separator', () => {
  assertEquals(toDotCase('hello-world', { separator: '-' }), 'hello.world')
})


