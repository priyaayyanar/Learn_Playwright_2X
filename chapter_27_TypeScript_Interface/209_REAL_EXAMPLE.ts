interface BaseURL {
    url: string;
    title: string;
}

interface LoginPage extends BaseURL {
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;
}

interface FreeTrialPage extends BaseURL {
    usernameSelector: string;
    submitButtonSelector: string;
}

let loginPage: LoginPage = {
    url: "https://staging.app.com/login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#login-button"
}

let freeTrialPage: FreeTrialPage = {
    url: "https://staging.app.com/free-trial",
    title: "Free Trial Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit-button"
}

console.log("URL : " + loginPage.url);
console.log("Title : " + loginPage.title);
console.log("UserName field : " + loginPage.usernameSelector);

console.log("---------------------------");

console.log("URL : ", freeTrialPage.url);
console.log("Title : ", freeTrialPage.title);
console.log("UserName field : ", freeTrialPage.usernameSelector);
console.log("Submit button field : ", freeTrialPage.submitButtonSelector);  
