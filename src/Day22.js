//function should remember its value even after the function is returned // Clousers
function ParentFunction() {
    let Salary = 40000;

    return function InnerFunction() {
        Salary += 8000;
        return Salary;
    }
}

const result = ParentFunction();
console.log(result());
console.log(result());
console.log(result());