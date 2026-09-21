enum Browser {
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge"
}

function launchBrowser(browser: Browser): void {
    switch (browser) {
        case Browser.Chrome:
            console.log("Launching Google Chrome...");
            break;
        case Browser.Firefox:
            console.log("Launching Mozilla Firefox...");
            break;
        case Browser.Safari:
            console.log("Launching Apple Safari...");
            break;
        case Browser.Edge:
            console.log("Launching Microsoft Edge...");
            break;
    }
}

launchBrowser(Browser.Edge)
