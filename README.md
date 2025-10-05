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

### Unicode Character Utilities

- [x] `isPrintable(char: string): boolean`
- [x] `isEmoji(char: string): boolean`
- [x] `isWhitespace(char: string): boolean`
- [x] `normalizeSpaces(str: string): string`
- [x] `removeDiacritics(str: string): string`
- [x] `splitGraphemes(str: string): string[]`

## Planned Utilities

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

- [ ] `repeatUntil(str: string, length: number): string`- repeat string until a given length.
- [ ] `reverse(str: string): string`- reverse string correctly, accounts for unicode surrogate pairs.
- [ ] `rotate(str: string, n: number): string`- rotate characters left/right (caesar cipher)

### Formatting and Alignment

- [ ] `justifyText(str: string, width: number): string`- justification for fixed-width output.
- [ ] `wrapText(str: string, width: number): string[]`- wrap text at word boundaries.

### Validation

- [ ] `isNumeric(str: string): boolean`
- [ ] `isInteger(str: string): boolean`
- [ ] `isFloat(str: string): boolean`
- [ ] `isAlpha(str: string): boolean`
- [ ] `isAlphanumeric(str: string): boolean`
- [ ] `parseBoolean(str: string): boolean | null`

### Miscellaneous

- [ ] `randomString(length: number, charset?: string): string`
