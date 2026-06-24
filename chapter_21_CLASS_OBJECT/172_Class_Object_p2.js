class person {

    // Attributes
    name;
    age;
    email;
    phNumber;

    // Behaviors
    sleep() { };
    eat() { };
    walk() { };


}

let obj_ref = new person(); // Object creation  

// obj_ref is a reference variable which is pointing to the object of person class
// new person() is an object of person class which is created in heap memory

console.log(obj_ref); // person { name: undefined, age: undefined, email: undefined, phNumber: undefined }