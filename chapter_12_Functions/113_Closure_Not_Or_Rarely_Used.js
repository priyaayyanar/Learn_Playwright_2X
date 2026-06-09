function outer() {
    let message = "Hello!";
    console.log('Outer Called');
    function inner() {
        console.log(message);
    }
    return inner;
}

let call_inner_function = outer();
// inner(); -> inner is not defined
call_inner_function();

