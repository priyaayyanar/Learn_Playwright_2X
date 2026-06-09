// let g_x = 10;

// // Nested Function | Blocked Scope

// function outer() {
//     let x = 10;

//     function inner() {
//         let y = 20;
//         console.log(g_x); // 10
//         console.log(x); // 10
//     }

//     inner();
//     console.log(y); // undefined
// }

let g_x = 10;


//This Functions are not used in Playwright Automation
// Nested scope | blocked scope 

function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);

    }
    inner();
    console.log(y);
}

