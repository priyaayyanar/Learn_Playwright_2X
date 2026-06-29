class BankAccount {
    #balance = 0; // private field, hidden from outside the class

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount; // this.#balance = amount + this.#balance
        }
    }

    getBalance() {
        return this.#balance; // public method to access private fields
    }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance()); // 500

console.log(account.balance);
// undefined, private field is not accessible from outside
// the class name {constructor(parameters) {}   }
