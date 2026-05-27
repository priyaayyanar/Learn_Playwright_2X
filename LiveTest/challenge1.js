function normalizeJsBasicsLabel(label) {

    return "js-basic-" + label
        .trim()                      // Remove leading/trailing spaces
        .toLowerCase()               // Convert to lowercase
        .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric groups with "-"
        .replace(/^-|-$/g, "");      // Remove starting/ending hyphens

}

console.log(normalizeJsBasicsLabel(" JavaScript Basics "));
// js-basic-javascript-basics

console.log(normalizeJsBasicsLabel("Null & Undefined"));
// js-basic-null-undefined

console.log(normalizeJsBasicsLabel("QA   Setup@@Engine"));
// js-basic-qa-setup-engine