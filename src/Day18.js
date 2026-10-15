const employees = [
    { id: 1, name: "Ali", department: "IT", salary: 60000 },
    { id: 2, name: "Ahmed", department: "HR", salary: 45000 },
    { id: 3, name: "Sara", department: "IT", salary: 50000 },
    { id: 4, name: "Fatima", department: "Finance", salary: 25000 },
    { id: 5, name: "Bilal", department: "IT", salary: 90000 },
    { id: 6, name: "Hamza", department: "HR", salary: 35000 }
];

const DepartmentWiseSalaries = (employees,) => {
    let result = {}
    for (let i = 0; i < employees.length; i++) {
        let dept = employees[i].department;
        let sal = employees[i].salary;


        if (!result[dept]) {
            result[dept] = sal
        }
        else {
            result[dept] = sal
        }
    }
    return result;
}
console.log(DepartmentWiseSalaries(employees))