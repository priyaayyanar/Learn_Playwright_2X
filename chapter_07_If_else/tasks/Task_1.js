/**
Question 1 — HTTP Status Code Categorizer

Problem: Given an HTTP status code, print which category it belongs to.

200–299 → Success

300–399 → Redirection

400–499 → Client Error

500–599 → Server Error

Anything else → Invalid

Sample Input/Output:

Input: 404
Output: Client Error

Input: 200
Output: Success 

*/

let status_code = 200;

if (status_code >= 200 && status_code < 300) {
    console.log("Success");
} else if (status_code >= 300 && status_code < 400) {
    console.log("Redirection");
} else if (status_code >= 400 && status_code < 500) {
    console.log("Client Error");
} else if (status_code >= 500 && status_code < 600) {
    console.log("Server Error");
} else {
    console.log("Invalid");
}

