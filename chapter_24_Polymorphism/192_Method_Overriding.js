class BaseTest {
    setup() {
        console.log("Base: Open Browser");
    }

}

class APIPage extends BaseTest {
    setup() {
        //super.setup();
        console.log("API: Open Browser");
    }
}

let apiPage = new APIPage();
apiPage.setup(); // API: Open Browser