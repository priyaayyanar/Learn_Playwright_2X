function getToken() {
    return Promise.resolve("123pri");
}

async function run() {
    let token = await getToken();
    console.log(token);
}

run();

