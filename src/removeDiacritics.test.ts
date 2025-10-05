import { assertEquals } from 'jsr:@std/assert'
import { removeDiacritics } from './removeDiacritics.ts'

Deno.test('removeDiacritics: basic accents', () => {
  assertEquals(removeDiacritics('café'), 'cafe')
  assertEquals(removeDiacritics('fiancée'), 'fiancee')
  assertEquals(removeDiacritics('über'), 'uber')
  assertEquals(removeDiacritics('ñoño'), 'nono')
})

Deno.test('removeDiacritics: no diacritics', () => {
  assertEquals(removeDiacritics('hello world'), 'hello world')
})

Deno.test('removeDiacritics: empty string', () => {
  assertEquals(removeDiacritics(''), '')
})
