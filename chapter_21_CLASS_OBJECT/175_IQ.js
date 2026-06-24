class Browser {
    // Parameterized constructor (arguments)
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " Browser is lanched.");
    }

    startBrowser() {
        console.log('Starting the browser : ');
    }

    closeBrowser() {
        console.log('Closing the Browser : ');
    }
}

let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");

console.log(chrome.isOpen);