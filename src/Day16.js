
const employees = [
  { id: 1, name: "Ali", department: "IT", salary: 60000 },
  { id: 2, name: "Ahmed", department: "HR", salary: 45000 },
  { id: 3, name: "Sara", department: "IT", salary: 50000 },
  { id: 4, name: "Fatima", department: "Finance", salary: 25000 },
  { id: 5, name: "Bilal", department: "IT", salary: 90000 },
  { id: 6, name: "Hamza", department: "HR", salary: 35000 }
];



// Write a function that takes an array of employee objects and returns the highest salary among them.
const SalaryRange = employees.filter((employee)=>employee.salary>=40000 && employee.salary<=70000).map((employee)=>employee.name)
console.log("Employees with salary between 40000 and 70000 are "+(SalaryRange))



// Write a function that takes an array of employee objects and returns the names of employees with salary greater than 50000.
const IncreaseSalary = employees.map((employee)=>({name:employee.name, salary:employee.salary+5000}))
console.log("Employees with increased salary are: ", IncreaseSalary)


//Return names of the employees with uppercase names
const UpperCaseNames = employees.map((employee)=>employee.name.toUpperCase())
console.log("Employees with uppercase names are: ", UpperCaseNames)

//Return the total salary of all employees
const TotalSalary = employees.reduce((total,employee)=>total+employee.salary,0)
console.log("Total salary of all employees is: ", TotalSalary)

const TotalSalaryIT = employees.filter((employee)=>employee.department=="IT").reduce((total,employee)=>total+employee.salary,0)
console.log("Total salary of IT employees is: ", TotalSalaryIT)