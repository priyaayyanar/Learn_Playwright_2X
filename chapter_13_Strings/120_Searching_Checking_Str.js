// Searching and Checking
let url = "https://staging.vwo.com/api/login?retry=true";

console.log(url.includes("staging"));
console.log(url.includes("production"));

console.log(url.startsWith("https"));
console.log(url.endsWith("true"));

// indexOf & lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.lastIndexOf("nothere")); // -1
console.log(url.lastIndexOf("x")); // -1

// 
console.log(url.search(/login/));
console.log(url.search(/vwo/));

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 