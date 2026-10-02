// Write a function that takes an array of employee objects and returns the highest salary among them.

const employees = [
  { id: 1, name: "Ali", department: "IT", salary: 60000 },
  { id: 2, name: "Ahmed", department: "HR", salary: 45000 },
  { id: 3, name: "Sara", department: "IT", salary: 50000 },
  { id: 4, name: "Fatima", department: "Finance", salary: 25000 },
  { id: 5, name: "Bilal", department: "IT", salary: 90000 },
  { id: 6, name: "Hamza", department: "HR", salary: 35000 }
];

const HighestSalary = (employees)=>{
let HighSalary = 0;
for(let i=0; i<employees.length; i++){
  if(employees[i].salary>HighSalary){
    HighSalary = employees[i].salary
    
  }
}
  return HighSalary
}
console.log("HighestSalary is "+HighestSalary(employees))




// Write a function that takes an array of employee objects and returns the lowest salary among them.

const LowestSalary = (employees)=>{
let LowestSalary = employees[0].salary;
for(let i=0; i<employees.length; i++){
  if(employees[i].salary<LowestSalary){
    LowestSalary = employees[i].salary
    
  }
}
  return LowestSalary
}
console.log("LowestSalary is "+LowestSalary(employees))



// Write a function that takes an array of employee objects and returns the names of employees with salary greater than 50000.
const Result = employees.filter((employee)=>employee.salary>50000).map((employee)=>employee.name)
console.log("Employees with salary greater than 50000 are "+Result)


//Task 4: filter employees in the HR department and return their names and salaries.
const HRDepartment = employees.filter((employee)=>employee.department=="HR").map((employee)=>({name: employee.name, salary: employee.salary}))
console.log("Employees in HR department are "+JSON.stringify(HRDepartment))