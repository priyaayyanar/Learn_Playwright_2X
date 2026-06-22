# Understanding `default` vs Non-Default (Named) Exports in JavaScript

This document explains the difference between **default exports** and **named exports** using the files in this project as practical examples.

---

## 1. Named Exports (Non-Default)

Named exports allow you to export multiple values from a single file. When importing them, you **must use curly braces `{}`** and match the exact export name (unless you use an alias).

### Example Export Files

**`../utils.js`**
```javascript
export let BASE_URL = "https://api.staging.com";

export function formatTestName(name) {
    return "TC_" + name.toUpperCase();
}
```

**`../testutils.js`**
```javascript
export let BASE_URL = "https://app.vwo.com";

export function formatUpperCaseString(name) {
    return name.toUpperCase();
}
```

### Example Import File: `169_Utils.js`

```javascript
import { BASE_URL as bul_util, formatTestName } from "../utils.js";
import { BASE_URL as bul_test_util, formatUpperCaseString } from "../testutils.js";

console.log(bul_util);                           // https://api.staging.com
console.log(bul_test_util);                      // https://app.vwo.com
console.log(formatTestName("Login Page"));       // TC_LOGIN PAGE
console.log(formatUpperCaseString("Login Page")); // LOGIN PAGE
```

### Key Rules for Named Exports

| Rule | Description |
|------|-------------|
| **Curly braces required** | You must wrap imported names in `{}` |
| **Name must match** | Use the exact same name as the export, or use `as` to create an alias |
| **Multiple per file** | A single module can export as many named values as needed |
| **Aliasing** | Use `import { originalName as newName }` to avoid naming conflicts (e.g., two files both export `BASE_URL`) |

---

## 2. Default Exports

A module can have **only one default export**. It is the "main" thing being exported from that file. When importing, you **do NOT use curly braces `{}`**, and you can assign **any name** you want to the imported value.

### Example Export File

**`../logger.js`**
```javascript
export default function LogMessage(message) { // default export
    console.log('[LOG] - default ' + message);
}

export function LogMessage1(message) {        // named export
    console.log('[LOGS] ' + message);
}
```

Notice that `logger.js` contains **both** a default export and a named export (`LogMessage1`).

### Example Import File: `170_Logger.js`

```javascript
import log from "../logger.js"; // {} is NOT required for default export

log("Starting the Test Case");   // Output: [LOG] - default Starting the Test Case
```

### Key Rules for Default Exports

| Rule | Description |
|------|-------------|
| **No curly braces** | Import directly without `{}` |
| **Any name works** | You can rename the import freely (`import log`, `import myLog`, `import logger`, etc.) |
| **One per file** | A module can only have **one** `export default` |
| **Can coexist** | A file can have both a default export AND multiple named exports |

---

## 3. Side-by-Side Comparison

| Feature | Named Export | Default Export |
|---------|-------------|----------------|
| **Keyword** | `export` | `export default` |
| **Import Syntax** | `import { name } from "..."` | `import name from "..."` |
| **Curly Braces `{}`** | Required | Not required |
| **Import Name** | Must match export name (or use `as`) | Can be any valid identifier |
| **Quantity per File** | Unlimited | Maximum one |
| **Typical Use Case** | Utility functions, constants, multiple helpers | Main class, main function, primary component |

---

## 4. Quick Reference

### Importing Named Exports
```javascript
// Basic named import
import { formatTestName } from "../utils.js";

// Named import with alias
import { BASE_URL as bul_util } from "../utils.js";

// Multiple named imports
import { BASE_URL, formatTestName } from "../utils.js";
```

### Importing Default Exports
```javascript
// Import default with custom name
import log from "../logger.js";

// Another valid name for the same default export
import myLogger from "../logger.js";
```

### Importing Both Default and Named from the Same File
```javascript
import log, { LogMessage1 } from "../logger.js";

log("Default log");
LogMessage1("Named log");
```

---

## Summary

- Use **named exports** (`export { ... }`) when a module provides multiple utilities, constants, or functions.
- Use **default exports** (`export default ...`) when a module has a single primary responsibility (e.g., a Logger, a Component, a Class).
- Remember the golden rule: **curly braces `{}` for named, no braces for default**.
