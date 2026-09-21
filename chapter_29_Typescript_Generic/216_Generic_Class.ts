class TestDataStorage<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getFirstItem(): T {
        return this.items[0]!; //The ! — non-null assertion operator
    }

    getAllItems(): T[] {
        return this.items;
    }

    count(): number {
        return this.items.length;
    }
}

let statusCodeStorage = new TestDataStorage<number>();
let statusNameStorage = new TestDataStorage<string>();

statusCodeStorage.addItem(200);
statusCodeStorage.addItem(400);
statusCodeStorage.addItem(500);

statusNameStorage.addItem("Login");
statusNameStorage.addItem("Signup");
statusNameStorage.addItem("Cart");

console.log("Status Codes : ", statusCodeStorage.getAllItems());
console.log("First Status Code : ", statusCodeStorage.getFirstItem());
console.log("Status Names : ", statusNameStorage.getAllItems());
console.log("Count of Status Codes : ", statusCodeStorage.count());
console.log("Count of Status Names : ", statusNameStorage.count());