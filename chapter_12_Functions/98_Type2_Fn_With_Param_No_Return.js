// With Parameter & No Return Type

function greetByName(name) {
    console.log('Hi', name);
}

greetByName("Priya");

let a = greetByName("Praneesh");
console.log(a);

function begger(money) {
    console.log('Thank You Mam!', money);
}

begger(100);

let anyReturn_from_begger = begger(200);
console.log("Return from begger : ", anyReturn_from_begger);