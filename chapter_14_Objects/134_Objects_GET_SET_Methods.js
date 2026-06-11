const user = {
    firstName: "Pri",
    lastName: "Pranu",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split("  ");
    }
}
// this -> current value in the object
// Objects -> JS
// Class & Object -> OOPs -> different from JS

console.log(user.fullName);
user.fullName = "Sri Pri";
console.log(user.fullName);