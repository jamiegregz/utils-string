import { assert, assertFalse } from 'jsr:@std/assert'
import { isEmoji } from './isEmoji.ts'

Deno.test('isEmoji: fully qualified', () => {
  assert(isEmoji('\u{1F603}'))
  assert(isEmoji('\u{1F44D}\u{1F3FD}'))
  assert(isEmoji('\u{1F468}\u{200D}\u{1F469}\u{200D}\u{1F467}\u{200D}\u{1F466}'))
})

Deno.test('isEmoji: minimally qualified', () => {
  assert(isEmoji('\u{1F469}\u{2764}\u{1F48B}\u{1F468}'))
})

Deno.test('isEmoji: unqualified', () => {
  assert(isEmoji('☺'))
  assert(isEmoji('☹'))
})

Deno.test('isEmoji: flags', () => {
  assert(isEmoji('\u{1F1EC}\u{1F1E7}'))
  assert(isEmoji('\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}'))
})

Deno.test('isEmoji: keycaps', () => {
  assert(isEmoji('*\uFE0F\u20E3'))
  assert(isEmoji('#\uFE0F\u20E3'))
  assert(isEmoji('1\uFE0F\u20E3'))
})

Deno.test('isEmoji: non-emoji', () => {
  assertFalse(isEmoji('A'))
  assertFalse(isEmoji('*'))
  assertFalse(isEmoji('#'))
  assertFalse(isEmoji('1'))
})
