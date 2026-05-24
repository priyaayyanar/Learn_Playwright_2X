/**
 * Question 4 — Build Health Reporter
Problem: Given the percentage of test cases passed in a CI build, report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)

Sample Input/Output:
Input: 95
Output: 🟡 Stable — Investigate failures
Input: 65
Output: 🔴 Broken Build — Block deployment
 */

let test_case_percentage = 65;

if (test_case_percentage === 100) {
    console.log("100% → Green Build");
} else if (test_case_percentage >= 90 && test_case_percentage < 100) {
    console.log("🟡 Stable — Investigate failures");
} else if (test_case_percentage >= 70 && test_case_percentage < 90) {
    console.log("Unstable");
} else if (test_case_percentage < 70) {
    console.log("🔴 Broken Build — Block deployment");
} else {
    console.log("No Idea");
}
