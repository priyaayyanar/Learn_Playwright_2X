// JavaScript Identifier Rules - Comprehensive Examples

// 1. Must start with letter, underscore, or dollar sign
let name = "valid";
let _private = "valid";
let $jquery = "valid";

// 2. Subsequent characters can include digits
let name1 = "valid";
let _var2 = "valid";
let $elem3 = "valid";

// 3. Case-sensitive
let myVar = 1;
let myvar = 2; // Different identifier
let MyVar = 3; // Different identifier

// 4. No spaces allowed
// let my var = 5; // Invalid: SyntaxError
let myVarName = "valid"; // Use camelCase instead

// 5. Unicode letters allowed
let π = 3.14;
let 变量 = "variable in Chinese";
let résumé = "valid with accents";

// 6. Cannot start with a digit
// let 1name = "invalid"; // Invalid: SyntaxError
// let 2ndPlace = "invalid"; // Invalid: SyntaxError

// 7. Cannot be a reserved keyword
// let let = 5; // Invalid: SyntaxError
// let class = "test"; // Invalid: SyntaxError
// let return = true; // Invalid: SyntaxError

// 8. Contextual keywords can be used with care
let await = "valid outside async function/module";
let yield = "valid outside generator";

// 9. Special valid patterns
let _ = "underscore alone is valid";
let $ = "dollar sign alone is valid";
let _123 = "starts with underscore, digits after";
let $abc = "starts with dollar, letters after";

// 10. Special invalid patterns (commented out)
// let my-var = "invalid"; // Hyphen not allowed
// let my.var = "invalid"; // Dot not allowed
// let my@var = "invalid"; // @ not allowed
// let my#var = "invalid"; // # not allowed (private fields syntax)

console.log("All valid identifiers declared successfully!");
console.log({ name, _private, $jquery, name1, _var2, $elem3, myVar, myvar, MyVar, myVarName, π, 变量, résumé, await, yield, _, $, _123, $abc });
