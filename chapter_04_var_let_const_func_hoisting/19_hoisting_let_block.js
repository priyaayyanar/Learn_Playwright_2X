let x = "global";

if (true) {
    // TDZ for block-scoped 'x' starts here
    // console.log(x); // ReferenceError: not global.
    // 
    //let x = "block";
    console.log(x); // block
}
