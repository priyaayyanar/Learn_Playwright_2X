/**
 * Question 3 — Bug Severity Classifier
Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score

Sample Input/Output:
Input: 9
Output: Severity: Critical — Block release

Input: 5
Output: Severity: Medium
 */

let bug_score = 9;

if (bug_score === 1 || bug_score <= 3) {
    console.log("Severity: Low");
} else if (bug_score === 4 || bug_score <= 6) {
    console.log("Severity: Medium");
} else if (bug_score === 7 || bug_score === 8) {
    console.log("Severity: High");
} else if (bug_score === 9 || bug_score === 10) {
    console.log("Severity: Critical (block release)");
} else {
    console.log("Invalid score");
}