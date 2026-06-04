# JavaScript String Cheatsheet

> Quick reference for JavaScript `String` methods and properties.

---

## String Static Methods

| Method | Syntax | Description | Example | Output |
|--------|--------|-------------|---------|--------|
| `String.raw` | `String.raw`template`` | Returns raw string from template literal | ``String.raw`C:\Users` `` | `"C:\\Users"` |
| `String.fromCharCode` | `String.fromCharCode(num1, ...)` | Creates string from UTF-16 code units | `String.fromCharCode(65, 66)` | `"AB"` |
| `String.fromCodePoint` | `String.fromCodePoint(num1, ...)` | Creates string from Unicode code points | `String.fromCodePoint(128522)` | `"😊"` |

---

## Properties

| Property | Syntax | Description | Example | Output |
|----------|--------|-------------|---------|--------|
| `length` | `str.length` | Returns number of UTF-16 code units | `"hello".length` | `5` |

---

## Character Access

| Method | Syntax | Description | Example | Output |
|--------|--------|-------------|---------|--------|
| `charAt` | `str.charAt(index)` | Returns character at index | `"abc".charAt(1)` | `"b"` |
| `charCodeAt` | `str.charCodeAt(index)` | Returns UTF-16 code unit at index | `"A".charCodeAt(0)` | `65` |
| `codePointAt` | `str.codePointAt(index)` | Returns Unicode code point at index | `"𐐷".codePointAt(0)` | `66551` |
| `at` | `str.at(index)` | Returns character at index (supports negatives) | `"abc".at(-1)` | `"c"` |
| Bracket notation | `str[index]` | Returns character at index | `"abc"[1]` | `"b"` |

---

## Searching

| Method | Syntax | Description | Example | Output |
|--------|--------|-------------|---------|--------|
| `indexOf` | `str.indexOf(search, fromIndex?)` | First index of substring | `"abcabc".indexOf("a")` | `0` |
| `indexOf` | `str.indexOf(search, fromIndex?)` | First index from position | `"abcabc".indexOf("a", 1)` | `3` |
| `lastIndexOf` | `str.lastIndexOf(search, fromIndex?)` | Last index of substring | `"abcabc".lastIndexOf("a")` | `3` |
| `includes` | `str.includes(search, fromIndex?)` | Checks if substring exists | `"abc".includes("b")` | `true` |
| `startsWith` | `str.startsWith(search, fromIndex?)` | Checks start of string | `"abc".startsWith("ab")` | `true` |
| `endsWith` | `str.endsWith(search, length?)` | Checks end of string | `"abc".endsWith("bc")` | `true` |
| `search` | `str.search(regexp)` | Match regex, return index | `"abc123".search(/\d+/)` | `3` |
| `match` | `str.match(regexp)` | Match regex, return array | `"abc123".match(/\d+/)` | `["123"]` |
| `matchAll` | `str.matchAll(regexp)` | Iterator of all regex matches | `[..."a1a2".matchAll(/a/g)]` | Array of matches |

---

## Extraction & Slicing

| Method | Syntax | Description | Example | Output |
|--------|--------|-------------|---------|--------|
| `slice` | `str.slice(start, end?)` | Extracts section of string | `"abcdef".slice(1, 4)` | `"bcd"` |
| `slice` | `str.slice(start)` | Extracts to end | `"abcdef".slice(3)` | `"def"` |
| `slice` | `str.slice(-3)` | Extracts last N characters | `"abcdef".slice(-3)` | `"def"` |
| `substring` | `str.substring(start, end?)` | Extracts section (swaps negatives to 0) | `"abcdef".substring(1, 4)` | `"bcd"` |
| `substr` | `str.substr(start, length?)` | ⚠️ Deprecated - extracts from start for length | `"abcdef".substr(1, 3)` | `"bcd"` |
| `split` | `str.split(separator, limit?)` | Splits into array by separator | `"a,b,c".split(",")` | `["a", "b", "c"]` |
| `split` | `str.split(separator, limit?)` | Splits with max items | `"a,b,c".split(",", 2)` | `["a", "b"]` |
| `split` | `str.split(regexp, limit?)` | Splits by regex | `"a1b2c".split(/\d/)` | `["a", "b", "c"]` |

---

## Concatenation & Repetition

| Method | Syntax | Description | Example | Output |
|--------|--------|-------------|---------|--------|
| `concat` | `str.concat(str1, str2, ...)` | Joins one or more strings | `"a".concat("b", "c")` | `"abc"` |
| `repeat` | `str.repeat(count)` | Repeats string N times | `"ab".repeat(3)` | `"ababab"` |
| `+` operator | `str1 + str2` | Concatenates strings | `"a" + "b"` | `"ab"` |
| `+=` operator | `str += other` | Appends to string | `let s="a"; s+="b"` | `"ab"` |
| Template literal | `` `...${var}...` `` | Interpolated string | `` `Hi ${name}` `` | Depends on `name` |

---

## Whitespace Trimming

| Method | Syntax | Description | Example | Output |
|--------|--------|-------------|---------|--------|
| `trim` | `str.trim()` | Removes whitespace from both ends | `"  abc  ".trim()` | `"abc"` |
| `trimStart` | `str.trimStart()` | Removes leading whitespace | `"  abc".trimStart()` | `"abc"` |
| `trimEnd` | `str.trimEnd()` | Removes trailing whitespace | `"abc  ".trimEnd()` | `"abc"` |
| `trimLeft` | `str.trimLeft()` | ⚠️ Alias for `trimStart` | `"  abc".trimLeft()` | `"abc"` |
| `trimRight` | `str.trimRight()` | ⚠️ Alias for `trimEnd` | `"abc  ".trimRight()` | `"abc"` |

---

## Padding

| Method | Syntax | Description | Example | Output |
|--------|--------|-------------|---------|--------|
| `padStart` | `str.padStart(targetLength, padString?)` | Pads from start | `"5".padStart(3, "0")` | `"005"` |
| `padEnd` | `str.padEnd(targetLength, padString?)` | Pads from end | `"5".padEnd(3, "0")` | `"500"` |

---

## Replacement

| Method | Syntax | Description | Example | Output |
|--------|--------|-------------|---------|--------|
| `replace` | `str.replace(search, replacement)` | Replaces first match | `"aaa".replace("a", "b")` | `"baa"` |
| `replace` | `str.replace(regexp, replacement)` | Replaces regex match | `"aaa".replace(/a/g, "b")` | `"bbb"` |
| `replace` | `str.replace(regexp, function)` | Replace with callback | `"a1b2".replace(/\d/g, x=>x*2)` | `"a2b4"` |
| `replaceAll` | `str.replaceAll(search, replacement)` | Replaces all literal matches | `"aaa".replaceAll("a", "b")` | `"bbb"` |
| `replaceAll` | `str.replaceAll(regexp, replacement)` | Replaces all regex matches | `"a1a2".replaceAll(/a/g, "X")` | `"X1X2"` |

---

## Case Conversion

| Method | Syntax | Description | Example | Output |
|--------|--------|-------------|---------|--------|
| `toLowerCase` | `str.toLowerCase()` | Lowercase | `"HELLO".toLowerCase()` | `"hello"` |
| `toUpperCase` | `str.toUpperCase()` | Uppercase | `"hello".toUpperCase()` | `"HELLO"` |
| `toLocaleLowerCase` | `str.toLocaleLowerCase(locales?)` | Locale-aware lowercase | `"I".toLocaleLowerCase("tr")` | `"ı"` |
| `toLocaleUpperCase` | `str.toLocaleUpperCase(locales?)` | Locale-aware uppercase | `"i".toLocaleUpperCase("tr")` | `"İ"` |

---

## Unicode & Normalization

| Method | Syntax | Description | Example | Output |
|--------|--------|-------------|---------|--------|
| `normalize` | `str.normalize(form?)` | Unicode normalization (NFC, NFD, NFKC, NFKD) | `str.normalize("NFC")` | Normalized string |
| `isWellFormed` | `str.isWellFormed()` | Checks if string is well-formed Unicode | `"abc".isWellFormed()` | `true` |
| `toWellFormed` | `str.toWellFormed()` | Replaces ill-formed substrings | `"abc".toWellFormed()` | `"abc"` |

---

## Comparison

| Method | Syntax | Description | Example | Output |
|--------|--------|-------------|---------|--------|
| `localeCompare` | `str.localeCompare(compareString, locales?, options?)` | Compares for sorting | `"a".localeCompare("b")` | `-1` |
| `===` | `str1 === str2` | Strict equality | `"a" === "a"` | `true` |
| `==` | `str1 == str2` | Loose equality | `"5" == 5` | `true` |

---

## Conversion

| Method | Syntax | Description | Example | Output |
|--------|--------|-------------|---------|--------|
| `toString` | `str.toString()` | Returns string primitive | `new String("a").toString()` | `"a"` |
| `valueOf` | `str.valueOf()` | Returns string primitive | `new String("a").valueOf()` | `"a"` |
| `String` | `String(value)` | Converts any value to string | `String(123)` | `"123"` |
| `toString` | `value.toString()` | Converts value to string | `(123).toString()` | `"123"` |

---

## Well-Known Symbols

| Symbol | Behavior | Example |
|--------|----------|---------|
| `String[Symbol.iterator]` | Makes strings iterable | `for (const char of "abc") { ... }` |

---

## Chaining Example

```javascript
const result = "  Hello, World!  "
  .trim()                      // "Hello, World!"
  .toLowerCase()               // "hello, world!"
  .replace("world", "js")      // "hello, js!"
  .split(", ");                 // ["hello", "js!"]
```

---

## Quick Reference: Method Return Types

| Category | Methods |
|----------|---------|
| Returns `number` | `length`, `indexOf`, `lastIndexOf`, `search`, `localeCompare`, `charCodeAt`, `codePointAt` |
| Returns `string` | `charAt`, `at`, `slice`, `substring`, `substr`, `trim`, `trimStart`, `trimEnd`, `padStart`, `padEnd`, `repeat`, `replace`, `replaceAll`, `toLowerCase`, `toUpperCase`, `toLocaleLowerCase`, `toLocaleUpperCase`, `normalize`, `toWellFormed`, `concat` |
| Returns `boolean` | `includes`, `startsWith`, `endsWith`, `isWellFormed` |
| Returns `array` | `split`, `match` |
| Returns `iterator` | `matchAll` |
| Returns `object/null` | `match` (when no match found) |

---

## Notes

- **Immutability**: All string methods return a new string; the original is never modified.
- **Negative indices**: `at()` supports negative indices; `charAt()` does not.
- **Deprecated**: `substr()` and `big()` / `blink()` / `bold()` / `fixed()` / `fontcolor()` / `fontsize()` / `italics()` / `link()` / `small()` / `strike()` / `sub()` / `sup()` are deprecated HTML wrapper methods.
- **Performance**: For concatenating many strings in a loop, prefer `array.join('')` over repeated `+`.
