// Private fields -> #
// Public fields -> no #

class Credentials {
    username;
    #password;

    constructor(name, pwd) {
        this.username = name; // public field
        this.#password = pwd; // Private field
    }

    //custom methods made by us
    priyaGetAuthHeader() {
        return this.#password;
    }
}

let cred = new Credentials("priya", "1234");
console.log(cred.username); // public field
//console.log(cred.#password); // private field -> error
//console.log(cred.password); // private field -> undefined

const token = cred.priyaGetAuthHeader();
console.log(token);