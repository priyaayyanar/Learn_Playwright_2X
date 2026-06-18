async function testAPI() {
    try {
        let result = await Promise.reject("503 reject");
    }
    catch (error) {
        console.log('Error ', error);
    }
    finally {
        console.log('Clean Up');
    }
}

testAPI();