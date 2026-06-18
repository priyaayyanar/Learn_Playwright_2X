// When there is no dependency between the results, 
// then we can go for parallel execution

function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 OK")
        }, 2000);
    })
}

async function parallelTest() {
    let [r1, r2, r3] = await Promise.allSettled([
        apiCall("Auth Service"),
        apiCall("User Account creation"),
        apiCall("SupportPage API")
    ]);

    console.log(r1);
    console.log(r2);
    console.log(r3);
}

parallelTest();