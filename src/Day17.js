
const employees = [
  { id: 1, name: "Ali", department: "IT", salary: 60000 },
  { id: 2, name: "Ahmed", department: "HR", salary: 45000 },
  { id: 3, name: "Sara", department: "IT", salary: 50000 },
  { id: 4, name: "Fatima", department: "Finance", salary: 25000 },
  { id: 5, name: "Bilal", department: "IT", salary: 90000 },
  { id: 6, name: "Hamza", department: "HR", salary: 35000 }
];

const totalSalary = (employees,deptName)=>{
    let Salary = 0;
    for(let i=0; i<employees.length; i++){
        if(employees[i].department==deptName){
            Salary += employees[i].salary
        }
    }
    return Salary
}
// console.log(totalSalary(employees,"IT"))

const TotalSalaryEachDept = (employees,departmentName)=>{
    let Result = {
        Department_Name : departmentName,
        Total_Salary : totalSalary(employees,departmentName)
    }
    return Result

}
console.log(TotalSalaryEachDept(employees,"IT"))