# Chapter 22: Encapsulation

This folder contains JavaScript programs that demonstrate the concept of **Encapsulation** using private class fields (`#field`) introduced in modern JavaScript (ES2022+).

## Files Overview

| File | Description |
|------|-------------|
| `179_Ecap.js` | Basic encapsulation example using a `BankAccount` class with a private `#balance` field. |
| `180_REAL_EXAMPLE.js` | Real-world example of a `Parent` class hiding children names as private fields and exposing them via getter/setter methods. |
| `181_Ecap_Car.js` | `Car` class example demonstrating how internal details like `#engine` are hidden from direct external access. |
| `182_ECap_Bank.js` | Extended bank example (`HDFC`) showing access control logic inside a setter — balance updates only allowed when `isCashier` is `true`. |

## Key Concepts Demonstrated

- **Private Fields (`#`)**: Variables prefixed with `#` are accessible only inside the class.
- **Getters & Setters**: Public methods used to read or modify private data safely.
- **Access Control**: Adding conditions inside setters to restrict unauthorized modifications.
- **Data Hiding**: Preventing direct external access to sensitive internal properties.

## How to Run

```bash
node 179_Ecap.js
node 180_REAL_EXAMPLE.js
node 181_Ecap_Car.js
node 182_ECap_Bank.js
```

> Ensure your Node.js version supports private class fields (Node.js v12+ with harmony flags, or v14+ natively).
