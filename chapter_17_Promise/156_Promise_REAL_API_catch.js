// catch() runs Only when the promise rejected

let apiCall = new Promise(function (resolve, reject) {
    reject("500 Error");
});

apiCall.then(function (data) {
    console.log('Success or Resolve');
}).catch(function (error) {
    console.log(error);
})

// then() runs only when the promise is resolved









