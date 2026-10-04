class PlaywrightConfig {
    readonly baseURL: string;
    readonly timeOut: number;
    readonly retryCount: number;

    constructor(baseURL: string, timeout: number, retryCount: number) {
        this.baseURL = baseURL;
        this.timeOut = timeout;
        this.retryCount = retryCount;
    }
    showConfig(): void {
        console.log("Base URL : " + this.baseURL);
        console.log("Timeout : " + this.timeOut);
        console.log("Retry Count : " + this.retryCount);
    }
}

let config = new PlaywrightConfig("https://app/staging.com", 5000, 3);
config.showConfig();
