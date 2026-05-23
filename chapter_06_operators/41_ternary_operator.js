let person_age = 17;
let person_can_vote = person_age > 18 ? "Can Vote" : "Can't Vote";
console.log(person_can_vote);

let actual_status_code = 200;
let expected_status_code = 200;

let test_result = actual_status_code === expected_status_code ? "Test Passed" : "Test Failed";
console.log(test_result);

let environment = "Staging";
let baseURL = environment === "Prod" ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseURL);

let isCI = true;
let browserMode = isCI ? "headed" : "headless";
console.log("Launching Browser with Browser Mode :", browserMode);

let condition = true;
let isMajor = condition ? ">18" : "<18";
console.log(isMajor);

let age = 26;
let can_pri_go_goa = age >= 26 ? "Yes ! She can go Goa !" : "No, She can't go goa.";
console.log(can_pri_go_goa);

let pri_age = 15;
let can_vote_DL = pri_age >= 18 ? (pri_age > 35 ? "Can Vote as well as Can Apply for DL" : "Can Vote, but Can't Apply for DL") : "Can't Vote, Can't Apply for DL aswell";
console.log(can_vote_DL);

let status_code = 404;
let category = status_code < 300 ? "Success" :
    status_code < 400 ? "Redirect" :
        status_code < 500 ? "Client Error" : "Server Error";
console.log('Status_Code  :category);

