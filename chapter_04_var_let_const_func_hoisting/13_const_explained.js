const base_URL = "https://app.thetestingacademy.com";
//const base_URL = "https://app.thetestingacademy.com"; SyntaxError: Identifier 'base_URL' has already been declared

//base_URL = "https:// staging.thetestingacademy.com";

console.log("Base URL : " + base_URL);

let name = "Pending";
name = "Done";
{
    let name = "Name in Block Scope";
    console.log("Name in Block Scope : " + name);
}

function printName() {
    let name = "Name in Function Scope";
    console.log("Name in Function Scope : " + name);
}

printName();
printName();