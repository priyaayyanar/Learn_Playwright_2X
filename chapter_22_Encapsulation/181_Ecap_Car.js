class Car {
    #engine;
    constructor(car_name, engine_name) {
        this.car_name = car_name;
        this.#engine = engine_name;
    }
    getEngine() {
        return this.#engine;
    }
    setEngine(new_engine_name) {
        this.#engine = new_engine_name;
        return this.#engine;
    }
}

const car1 = new Car("Tesla", "V8");
console.log("Car Name : ", car1.car_name);

let engine_type = car1.getEngine();
console.log('Engine Type : ', engine_type);

console.log('------------------------------');
let engine_type2 = car1.setEngine("V9")
console.log('New Release of ', car1.car_name, " : ", engine_type2);