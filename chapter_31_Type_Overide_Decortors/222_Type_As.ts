let element: unknown = {
    tagName: "Button",
    textContext: "Submit",
    id: "btnSubmit",
    disabled: false
}

interface ElementI {
    tagName: string;
    textContext: string;
    id: string;
    disabled: boolean;
}

let button = element as ElementI;

console.log("Button Tag Name: " + button.tagName);
console.log("Text Context : " + button.textContext);
console.log("Button ID : " + button.id);
console.log("Button Disabled : " + button.disabled);