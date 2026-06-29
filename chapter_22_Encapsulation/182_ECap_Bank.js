class HDFC {
    #balance; // private variable

    constructor(cust_name, balance) {
        this.cust_name = cust_name;
        this.#balance = balance;
    }
    getBalance() {
        return this.#balance;
    }
    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
            console.log('Updated Balance : ', this.#balance);
        }
        else {
            console.log('Not Allowed. Permission Denied');
        }
    }
}

let cust1 = new HDFC("Priya", 100000);
console.log('Customer Name : ', cust1.cust_name, " | Available balance : ", cust1.getBalance());
let cust1_set_balance = cust1.setBalance(200000, false);

let cust2 = new HDFC("Ayyanar", 5000000);
console.log('Customer Name : ', cust2.cust_name, " | Available Balance : ", cust2.getBalance());
cust2.setBalance(10000000, true);

