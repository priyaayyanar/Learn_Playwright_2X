//Outer Functions
function makeCounter(start = 0) {
    let count = start;
    return {
        //Inner functions
        increment() { count++ },
        decrement() { count-- },
        get() { return count; }
    }
}

let counter = makeCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());

/**
 * Code Breakdown
1. makeCounter(start = 0) function
- Parameter: start (defaults to 0 if not provided)
- Variable: count — initialized to the start value
- Returns: An object with three methods:
- increment() — increases count by 1
- decrement() — decreases count by 1
- get() — returns the current count value

2. The Closure Pattern
Even though makeCounter finishes executing and its local scope would normally disappear, 
the returned methods still remember and access the count variable. 
This is the closure — the inner functions "close over" the count variable.

3. Execution Flow
let counter = makeCounter();  // count = 0
counter.increment();          // count = 1
counter.increment();          // count = 2
counter.increment();          // count = 3
console.log(counter.get());   // Output: 3
counter.decrement();          // count = 2
console.log(counter.get());   // Output: 2
 * 
 */