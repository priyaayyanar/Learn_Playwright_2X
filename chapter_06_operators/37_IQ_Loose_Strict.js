console.log(0 == ""); //true -> empty string coerce to a number 0 -> 0 == 0 -> true
console.log(0 == "0"); //true -> "0" string coerce to a number 0.
console.log("" == "0"); // false
//Because an empty string is not the same as "0", the result is false.
/** This behavior is not caused by type coercion. 
 * Because both sides are already strings, == behaves exactly like === in this case.
 *  "" and "0" are simply different text values, 
 * so the comparison is false.
 */
// This is called 🤯 (transitivity broken!)

console.log("" == 0); // true -> empty string will typr coerce to a number 0.

console.log(0 == false);
console.log(null == 0); //false -> null is a primitive value that means "this is empty on purpose."
console.log(null == undefined);
/**Null ↔ Undefined coercion does NOT exist in the spec
Here's the crucial difference. When you write null == undefined, the algorithm does not convert one into the other. Instead, it hits a special-case shortcut (Steps 2 and 3):
> If x is null and y is undefined, return true.
> If x is undefined and y is null, return true.
They are not coerced. The algorithm simply says "these two specific values are considered equal under loose equality" and returns immediately.
---
Proof they don't coerce to each other
If undefined actually coerced to null (or vice versa), they would behave the same in all contexts. They don't:
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN
console.log(String(null));       // "null"
console.log(String(undefined));  // "undefined"
console.log(null + 1);           // 1
console.log(undefined + 1);      // NaN
Each has its own independent coercion rules to other types. The spec simply never defines a conversion rule from null to undefined or back.
---
Why this distinction?
Historically, JavaScript wanted null and undefined to act as a "no value" pair for loose comparisons (so something == null catches both), but remain distinct everywhere else. So instead of creating a full coercion bridge between them, the spec authors just wrote a special exception into ==.
So to directly answer your question:  
String and number coercion exists because the spec defines ToNumber(string). Null and undefined have no equivalent mutual conversion because the spec authors chose not to create one — they used a special equality rule instead.
My earlier answer incorrectly framed it as "meaning prevents coercion." In reality, the spec prevents it. 
 * 
 */

console.log(null === undefined);
// false 
/**console.log(typeof null);         // "object"  (historical bug)
console.log(typeof undefined);    // "undefined"
so object == undefined ?
  The strict equality operator (===) says: "If the types are different primitive data types, immediately return false."
- null is type null
- undefined is type undefined
Since the types don't match, === returns false without even comparing values.
  */
