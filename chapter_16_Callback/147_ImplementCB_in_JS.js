// To symulate Asynch behaviour in JS, we use setTimeout(callback, milliseconds)
// Think of it as setting an alarm — "run this function after X milliseconds."

console.log('Test 1 : Started');

setTimeout(function () {
    console.log('Test 2 : API Response received');
}, 2000);

console.log('Test 3: Moving to next Test');

// O/P

/**
Test 1 : Started
Test 3: Moving to next Test
Test 2 : API Response received
 */

// Test 2 Executed at last as it is inside the callback function and waited for 2000ms
// setTimeOut function will finish execution only after 2000ms