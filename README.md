# `@utils/string`

A handful of commonly used string utilities.

## Completed Utilities

### Word Analysis

- [x] `wordCount(str: string): number`
- [x] `words(str: string): string[]`
- [x] `wordsUnique(str: string): string[]`
- [x] `wordsTruncate(str: string, n: number, ellipsis?: string): string`
- [x] `wordFrequency(str: string): Record<string, number>`
- [x] `longestWord(str: string): string`

### Case Utilities

 - [x] `toTitleCase(str: string, options?: { separator?: string }): string`
 - [x] `toSentenceCase(str: string, options?: { separator?: string }): string`
 - [x] `toCamelCase(str: string, options?: { separator?: string }): string`
 - [x] `toPascalCase(str: string, options?: { separator?: string }): string`
 - [x] `toSnakeCase(str: string, options?: { separator?: string }): string`
 - [x] `toScreamingSnakeCase(str: string, options?: { separator?: string }): string`
 - [x] `toTrainCase(str: string, options?: { separator?: string }): string`
 - [x] `toDotCase(str: string, options?: { separator?: string }): string`

## Planned Utilities

### Unicode Character Utilities

- [ ] `isPrintable(char: string): boolean` - detect if a char is visible (not control or formatting).
- [ ] `isEmoji(char: string): boolean` - check if a char is an emoji.
- [ ] `removeDiacritics(str: string): string` - strip accents/diacritics (é → e).
- [ ] `normalizeSpaces(str: string): string` - collapse all whitespace variants (including NBSP, en/em spaces) into a single space.
- [ ] `splitGraphemes(str: string): string[]` - split a string into visually distinct characters (grapheme clusters, needed for emojis).
- [ ] `isWhitespace(char: string): boolean` - includes all Unicode whitespace, beyond regex's `\s`.

### Trimming and Padding

- [ ] `trimChars(str: string, chars: string): string`
- [ ] `trimStartChars(str: string, chars: string): string`
- [ ] `trimEndChars(str: string, chars: string): string`
- [ ] `padToWidth(str: string, width: number, options?: { padChar?: string, align?: 'left'|'right'|'center' }): string`

### String Similarity and Matching

- [ ] `levenshteinDistance(a: string, b: string): number`
- [ ] `similarity(a: string, b: string): number`
- [ ] `longestCommonSubstring(a: string, b: string): string`
- [ ] `longestCommonPrefix(strs: string[]): string`

### Transformation

- [ ] `repeatUntil(str: string, length: number): string` - repeat string until a given length.
- [ ] `reverse(str: string): string` - reverse string correctly, accounts for unicode surrogate pairs.
- [ ] `rotate(str: string, n: number): string` - rotate characters left/right (caesar cipher)

### Formatting and Alignment

- [ ] `justifyText(str: string, width: number): string` - justification for fixed-width output.
- [ ] `wrapText(str: string, width: number): string[]` - wrap text at word boundaries.

### Validation

- [ ] `isNumeric(str: string): boolean`
- [ ] `isInteger(str: string): boolean`
- [ ] `isFloat(str: string): boolean`
- [ ] `isAlpha(str: string): boolean`
- [ ] `isAlphanumeric(str: string): boolean`
- [ ] `parseBoolean(str: string): boolean | null`

### Miscellaneous

- [ ] `randomString(length: number, charset?: string): string`
