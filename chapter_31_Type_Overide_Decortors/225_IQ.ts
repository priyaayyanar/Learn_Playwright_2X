class Father {
    home(): void {
        console.log("Father has a 2BHK home");
    }
}

class Son extends Father {
    home(): void {
        console.log("Son has a 3BHK home");
    }
}

let father = new Father();
father.home();
let son = new Son();
son.home();