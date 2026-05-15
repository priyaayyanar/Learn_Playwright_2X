//console.log(score); //ReferenceError: Cannot access 'score' before initialization
let score = 100;

{
    //TDZ for 'score' starts here
    // console.log(score); // ReferenceError: Cannot access 'score' before initialization
    // score =50; // ReferenceError: Cannot access 'score' before initialization
    // typeof score; // ReferenceError: Cannot access 'score' before initialization
    //TDZ for 'score' ends here when the declaration is encountered.

    let score = 50;  //  until the declaration is encountered.
    console.log(score);
}

console.log(score);