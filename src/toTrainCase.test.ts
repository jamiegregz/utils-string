import { assertEquals } from 'jsr:@std/assert'
import { toTrainCase } from './toTrainCase.ts'

Deno.test('toTrainCase: single word', () => {
  assertEquals(toTrainCase('Hello'), 'Hello')
})

Deno.test('toTrainCase: single word capitalised', () => {
  assertEquals(toTrainCase('HELLO'), 'Hello')
})

Deno.test('toTrainCase: single word lower case', () => {
  assertEquals(toTrainCase('hello'), 'Hello')
})

Deno.test('toTrainCase: multiple words', () => {
  assertEquals(toTrainCase('hello world'), 'Hello-World')
})

Deno.test('toTrainCase: multiple words capitalised', () => {
  assertEquals(toTrainCase('HELLO WORLD'), 'Hello-World')
})

Deno.test('toTrainCase: multiple words various whitespace separators', () => {
  assertEquals(toTrainCase('hello\u00A0world'), 'Hello-World')
  assertEquals(toTrainCase('hello\u2003world'), 'Hello-World')
  assertEquals(toTrainCase('hello\u2009world'), 'Hello-World')
})

Deno.test('toTrainCase: multiple words custom separator', () => {
  assertEquals(toTrainCase('hello_world', { separator: '_' }), 'Hello-World')
})


