# Chapter 20: OOPs Basics - Export & Import

This folder covers the fundamentals of JavaScript module systems, specifically **Named Exports** and **Default Exports**, which are essential building blocks for organizing and reusing code in modern JavaScript and Playwright projects.

---

## Folder Structure

```
chapter_20_OOPs_Basics/
├── utils.js                          # Named exports: constants & utility functions
├── testutils.js                      # Named exports: another set of utilities
├── logger.js                         # Default export + named export example
│
└── 01_EXPORT_IMPORT/
    ├── 168_EXPORT_IMPORT.js          # Basic named import demonstration
    ├── 169_Utils.js                  # Named imports with aliasing
    ├── 170_Logger.js                 # Default import demonstration
    └── ExplainDefault.md             # Detailed comparison of default vs named exports
```

---

## Core Concepts

### 1. Named Exports (`export`)

Named exports allow multiple values to be exported from a single file. They must be imported using **curly braces `{}`** with matching names (or aliases).

**Example Files:**

- **`utils.js`**
  ```javascript
  export let BASE_URL = "https://api.staging.com";

  export function formatTestName(name) {
      return "TC_" + name.toUpperCase();
  }
  ```

- **`testutils.js`**
  ```javascript
  export let BASE_URL = "https://app.vwo.com";

  export function formatUpperCaseString(name) {
      return name.toUpperCase();
  }
  ```

**Import Examples:**

- **168_EXPORT_IMPORT.js** - Basic named import
  ```javascript
  import { BASE_URL, formatUpperCaseString } from "../testutils.js";
  ```

- **169_Utils.js** - Named imports with aliasing to resolve naming conflicts
  ```javascript
  import { BASE_URL as bul_util, formatTestName } from "../utils.js";
  import { BASE_URL as bul_test_util, formatUpperCaseString } from "../testutils.js";
  ```

**Key Rules:**
- Use `{}` when importing
- Name must match the export, or use `as` for an alias
- Unlimited exports per file

---

### 2. Default Exports (`export default`)

A module can have only **one default export**. It represents the primary functionality of the module. When importing, **no curly braces `{}`** are needed, and you can assign any name.

**Example File:**

- **`logger.js`**
  ```javascript
  export default function LogMessage(message) { // default export
      console.log('[LOG] - default ' + message);
  }

  export function LogMessage1(message) {        // named export
      console.log('[LOGS] ' + message);
  }
  ```

**Import Example:**

- **170_Logger.js** - Default import with custom name
  ```javascript
  import log from "../logger.js"; // {} is NOT required

  log("Starting the Test Case");  // Output: [LOG] - default Starting the Test Case
  ```

**Key Rules:**
- No `{}` required when importing
- Can rename the import freely
- Only one default export per file
- Can coexist with named exports in the same file

---

### 3. Comparison Summary

| Feature | Named Export | Default Export |
|---------|-------------|----------------|
| Keyword | `export` | `export default` |
| Import Syntax | `import { name } from "..."` | `import name from "..."` |
| Curly Braces `{}` | Required | Not required |
| Import Name | Must match (or use `as`) | Can be any valid name |
| Quantity per File | Unlimited | Maximum one |
| Typical Use Case | Utility functions, constants | Main class/function/component |

---

### 4. Importing Both Default and Named Exports

You can import a default export and named exports from the same file simultaneously:

```javascript
import log, { LogMessage1 } from "../logger.js";

log("Default log");          // Calls the default export
LogMessage1("Named log");    // Calls the named export
```

---

## Golden Rule

> **Curly braces `{}` for named, no braces for default.**

---

## Further Reading

For a more detailed explanation with practical examples, see:  
[`01_EXPORT_IMPORT/ExplainDefault.md`](./01_EXPORT_IMPORT/ExplainDefault.md)
