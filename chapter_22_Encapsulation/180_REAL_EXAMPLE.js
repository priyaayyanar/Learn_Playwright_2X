class Parent {
    // Hide our child from outside world.
    #child1;
    #child2;
    constructor(parent_name, child1, child2) {
        this.parent_name = parent_name;
        this.#child1 = child1;
        this.#child2 = child2;
    }

    getChild1() {
        return this.#child1;
    }

    getChild2() {
        return this.#child2;
    }

    setChild2(new_child_name) {
        this.#child2 = new_child_name;
        return this.#child2;
    }
}

let p = new Parent("Priya", "Riya", "Diya");
console.log('Parent Name : ', p.parent_name); // Priya
let ch1 = p.getChild1();
console.log("Child 1 name : ", ch1); // Riya
let ch2 = p.getChild2();
console.log('Child 2 name : ', ch2); // Diya
let ch2_new_name = p.setChild2("Miya");
console.log("Child 2 name after modification : ", ch2_new_name); // Miya
//console.log(p.#child1); // Error: Private field '#child1' must be declared in an enclosing class