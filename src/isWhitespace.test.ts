import { assert, assertFalse } from 'jsr:@std/assert'
import { isWhitespace } from './isWhitespace.ts'

Deno.test('isWhitespace: ascii chars', () => {
  assert(isWhitespace(' '))
  assert(isWhitespace('\t'))
  assert(isWhitespace('\n'))
  assert(isWhitespace('\r'))
  assert(isWhitespace('\f'))
  assert(isWhitespace('\v'))
})

Deno.test('isWhitespace: common unicode spaces', () => {
  assert(isWhitespace('\u00A0')) // nbsp
  assert(isWhitespace('\u2002')) // en
  assert(isWhitespace('\u2003')) // em
})

Deno.test('isWhitespace: extended unicode spaces', () => {
  assert(isWhitespace('\u2007'))
  assert(isWhitespace('\u202F'))
  assert(isWhitespace('\u205F'))
  assert(isWhitespace('\u3000'))
})

Deno.test('isWhitespace: non-whitespace', () => {
  assertFalse(isWhitespace('A'))
  assertFalse(isWhitespace('*'))
  assertFalse(isWhitespace('😃'))
})
