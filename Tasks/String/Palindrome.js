/** Problem Statement:
 * String Reverse | Palindrome Program
Given a string , Reverse it and print true if they are same.
Madam is palindrome, pramod is not
 */

function reverseString(str) {
    let reversedStr = '';
    str_lower_case = str.toLowerCase();
    for (let i = str_lower_case.length - 1; i >= 0; i--) {
        reversedStr += str_lower_case[i];
    }
    return reversedStr;
}

let resultStr = reverseString("Madam");

if (resultStr === str_lower_case) {
    console.log('The given string is Palindrome');
}

else {
    console.log('The given string is Not a Palindrome');
}