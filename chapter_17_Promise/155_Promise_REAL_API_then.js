let apiCall = new Promise(function (resolve, reject) {
    resolve({
        status: 200, body: "User Data"
    })
})

apiCall.then(function (response) {
    console.log(response.status);
    console.log(response);
})

// .then() runs Only if the promise resolves successfully