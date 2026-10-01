// Task 1: Filter employees in the IT department

const employees = [
  { id: 1, name: "Ali", department: "IT", salary: 30000 },
  { id: 2, name: "Ahmed", department: "HR", salary: 45000 },
  { id: 3, name: "Sara", department: "IT", salary: 50000 },
  { id: 4, name: "Fatima", department: "Finance", salary: 25000 },
  { id: 5, name: "Bilal", department: "IT", salary: 60000 },
  { id: 6, name: "Hamza", department: "HR", salary: 35000 }
];

const getITEmployees=(employees)=>{
  let NewArray = [];
  for(let i=0; i<employees.length; i++){
    if(employees[i].department=="IT"){
       NewArray.push(employees[i].name);
    }
  }
  return NewArray;
}

console.log("IT Department Employees:", getITEmployees(employees));





// Task 2: Calculate the total salary of employees in the IT department
const getSalarySum=(employees)=>{
  let SalarySum=0;
  for(let i=0; i<employees.length; i++){
    if(employees[i].department=="IT"){
      SalarySum += employees[i].salary;
    }
  }
  return SalarySum;
}

console.log("Total Salary of IT Department Employees:", getSalarySum(employees));