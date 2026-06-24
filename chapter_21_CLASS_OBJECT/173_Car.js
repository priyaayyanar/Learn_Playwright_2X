class Car {
    // CAB
    // C -> Constructor
    // A -> Attributes
    // B -> Behaviors

    // Constructor
    constructor(name_given_during_object_creation) {
        this.name = name_given_during_object_creation;
    }

    // Attributes
    name;

    // Behaviors
    drive() {
        console.log("I'm driving tesla :", this.name);
    }


}

const car_obj_ref = new Car("Model S"); // 1st Object creation
car_obj_ref.drive();
const car_obj_ref2 = new Car("Model 3"); // 2nd Object creation
car_obj_ref2.drive();