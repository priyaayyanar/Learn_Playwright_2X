class Person {
    static nationality = "Indian";
    static city = "Bangalore";

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static traffic() {
        console.log("Traffic is very bad in Bangalore");
    }
}

const person1 = new Person("Priya", 35);
let person2 = new Person("Pranu", 20);

console.log(person1.name, person1.age);
console.log(person2.name, person2.age);
console.log(Person.nationality, Person.city);
Person.traffic();