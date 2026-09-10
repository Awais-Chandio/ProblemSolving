//Solved from LeetCode
// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns
//  1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


const createCounter = function (n) {
    let count = n;

    return function () {
        const increment = count;
        count = count + 1;
        return increment;
    };
};

const counter = createCounter(100);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


