interface TestConfig {
    browser: string;
    headless: boolean;
    baseURL: string;
    path?: string;
    timeout?: number;
    retries?: number;
}

let ciConfig: TestConfig = {
    browser: "chromium",
    headless: true,
    baseURL: "https://staging.app.com",
}

let localConfig: TestConfig = {
    browser: "firefox",
    headless: false,
    baseURL: "http://localhost:3000",
    timeout: 5000,
    retries: 2,
}

console.log("CI Config -> Browser : " + ciConfig.browser + " | Headless : " + ciConfig.headless + " | Base URL : " + ciConfig.baseURL);
console.log("Local Config -> Browser : " + localConfig.browser + " | Headless : " + localConfig.headless + " | Base URL : " + localConfig.baseURL + " | Timeout : " + localConfig.timeout + " | Retries : " + localConfig.retries);