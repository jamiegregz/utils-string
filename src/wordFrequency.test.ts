import { assertEquals } from 'jsr:@std/assert'
import { wordFrequency } from './wordFrequency.ts'

Deno.test('wordFrequency: basic counts', () => {
  assertEquals(wordFrequency('one two three'), { one: 1, two: 1, three: 1 })
})

Deno.test('wordFrequency: repeated words', () => {
  assertEquals(wordFrequency('apple apple banana'), { apple: 2, banana: 1 })
  assertEquals(wordFrequency('dog cat dog cat dog'), { dog: 3, cat: 2 })
})

Deno.test('wordFrequency: handles extra whitespace', () => {
  assertEquals(wordFrequency('  red   red   blue  '), { red: 2, blue: 1 })
  assertEquals(wordFrequency('\n\t green green \t\n green '), { green: 3 })
})

Deno.test('wordFrequency: empty or whitespace-only strings', () => {
  assertEquals(wordFrequency(''), {})
  assertEquals(wordFrequency('   '), {})
  assertEquals(wordFrequency('\u2003\u2009\u00A0'), {})
})

Deno.test('wordFrequency: single word', () => {
  assertEquals(wordFrequency('word'), { word: 1 })
  assertEquals(wordFrequency('  word  '), { word: 1 })
})

Deno.test('wordFrequency: CJK ideographic space', () => {
  const str = '你好\u3000世界\u3000你好'
  assertEquals(wordFrequency(str), { 你好: 2, 世界: 1 })
})

Deno.test('wordFrequency: mixed whitespace types', () => {
  const str = 'one\u00A0two\nthree\tfour\u2003five two one'
  assertEquals(wordFrequency(str), { one: 2, two: 2, three: 1, four: 1, five: 1 })
})
