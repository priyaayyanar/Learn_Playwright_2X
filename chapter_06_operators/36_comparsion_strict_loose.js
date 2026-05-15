// number == string -> true (loose equality)
// number === string -> false (strict equality)
// console.log(45 == "45") -> true loose comparison
// console.log(45 == "50"); -> false values are unequal.

// console.log(45 === "45"); ->false - strict comparison - different types
console.log(5 === 5); // true - strict comparison - equal value

console.log(0 == ""); // true - loose comparison - converted empty string to number 0
console.log(0 === ""); // false - Strict comparison - string can't be converted to string
/**The === (strict equality) operator checks both the type AND the value of its operands. It never performs type coercion.
---
Criteria
Two values a === b are strictly equal only if all of the following are true:
1. Same type (number, string, boolean, object, etc.)
2. Same value (according to type-specific rules)
If the types differ, the result is immediately false — no conversion is attempted.
 * 
 */
console.log(true == 1); // true 
console.log(false == 0);
console.log(true == "1"); // true -> a string without 0 is true
console.log(true == "0"); // false -> a string with 0 is false
console.log(true == "2"); // false -> a string with 0 is false
/**true == "2" returns false because of how JavaScript's loose equality (==) coerces the operands:
Step-by-step coercion
Step	Operation	Result
1	true is a Boolean, so it gets converted to a Number	true → 1
2	Now comparing 1 == "2"	 
3	"2" is a String, so it gets converted to a Number	"2" → 2
4	Now comparing 1 == 2	false
The rule
When == encounters a Boolean on either side, 
it first converts that Boolean to a Number (true → 1, false → 0) before dealing with the other operand. 
It does not convert the Boolean directly to a String.
 * 
 */


console.log(true === "1"); // false
console.log(true == 2); //false

console.log(5 != "5"); // 5 = int, "5" - stng converted to number. both of them are equal.
console.log(5 !== "5"); // !== strict comparison - never perform type coercion. so int type 5 not eual to stg "5".
// console.log(5 !=== "5"); syntax error. 




