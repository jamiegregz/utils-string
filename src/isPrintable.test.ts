import { assert, assertFalse } from 'jsr:@std/assert'
import { isPrintable } from './isPrintable.ts'

Deno.test('isPrintable: visible characters', () => {
  assert(isPrintable('A'))
  assert(isPrintable(' '))
  assert(isPrintable('*'))
  assert(isPrintable('中'))
})

Deno.test('isPrintable: non printable characters', () => {
  assertFalse(isPrintable('\n'))
  assertFalse(isPrintable('\u200B'))
})
