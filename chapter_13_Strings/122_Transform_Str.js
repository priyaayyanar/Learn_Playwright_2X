let str = " Hello Priya ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

let msg = "Test : Fail. Retry : Fail.";
console.log(msg.replace("Fail", "Pass"));
console.log(msg.replaceAll("Fail", "Pass"));
console.log(msg.replace(/Fail/, "Pass")); // Replace 1st Element
console.log(msg.replace(/Fail/g, "Pass")); // Replace all the elements

let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"));

let result = "pass,fail,skip".split(",");
console.log(result);

let result1 = "test_login_pass".split("_");
let result2 = "test_login_pass".split("_").join(" ");
console.log("Result 1 : " + result1 + " | " + "Result 2 : " + result2);

let parts = ["2026", "2", "10"];
let date = parts.join("-");
console.log(date);