const employees = [
    { id: 1, name: "Ali", department: "IT", salary: 60000 },
    { id: 2, name: "Ahmed", department: "HR", salary: 45000 },
    { id: 3, name: "Sara", department: "IT", salary: 50000 },
    { id: 4, name: "Fatima", department: "Finance", salary: 25000 },
    { id: 5, name: "Bilal", department: "IT", salary: 90000 },
    { id: 6, name: "Hamza", department: "HR", salary: 35000 }
];

//find the employee with id 4 with the find methode
const result = employees.find((emp) => emp.id == 4)
console.log(result)


//find if any employee have salary greater than 80000
const resultForSome = employees.some((emp) => emp.salary > 80000)
console.log(resultForSome)