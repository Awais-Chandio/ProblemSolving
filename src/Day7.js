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


