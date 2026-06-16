let testRun = new Promise(function (resolve, reject) {
    let apiCall = false;
    if (apiCall) {
        resolve({ "Status": "Done" });
    } else {
        reject("Assertion Failed");
    }
});

testRun.then(function (data) {
    console.log('Inside then(resolve) function');
    console.log(data);
}).catch(function (error) {
    console.log('Inside catch(reject) function');
    console.log(error);
}).finally(function () {
    console.log('Finally : Test has been executed successfully');
})