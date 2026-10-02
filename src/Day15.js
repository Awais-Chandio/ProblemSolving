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