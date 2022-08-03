var ID=999;
function getEmpId () {
    return ID++;
};

function CalcuSalary(lev){
    let salary;
    
    if (lev === "Senior") {
        salary = Math.floor(Math.random()*(2000-1500)+1500);
        
    }
    else if (lev === "Mid-Senior") {
        salary = Math.floor(Math.random()*(1500-1000)+1000);
    }
    else if (lev === "Junior") {
        salary = Math.floor(Math.random()*(1000-500)+500);
    }
    return salary;
};

function NetSalary(salary) {
    salary = salary - (salary * 0.075)
}

var Emp1 = {
    employeeID : getEmpId(),
    FullName : "Ghazi Samer",
    Department : "Administration",
    level : "Senior",
    imageURL : "",
    Salary : CalcuSalary(),
};

var Emp2 = {
    employeeID : getEmpId(),
    FullName : "Lana Ali",
    Department : "Finance",
    level : "Senior",
    imageURL : "imageURL",
    Salary : CalcuSalary(),
};

var Emp3 = {
    employeeID : getEmpId(),
    FullName : "Tamara Ayoub",
    Department : "Marketing",
    level : "Senior",
    imageURL : "imageURL",
    Salary : CalcuSalary(),
};

var Emp4 = {
    employeeID : getEmpId(),
    FullName : "Safi Walid",
    Department : "Administration",
    level : "Mid-Senior",
    imageURL : "imageURL",
    Salary : CalcuSalary(),
};

var Emp5 = {
    employeeID : getEmpId(),
    FullName : "Omar Zaid",
    Department : "Development",
    level : "Senior",
    imageURL : "imageURL",
    Salary : CalcuSalary(),
};

var Emp5 = {
    employeeID : getEmpId(),
    FullName : "Rana Saleh",
    Department : "Development",
    level : "Junior",
    imageURL : "imageURL",
    Salary : CalcuSalary(),
};

var Emp6 = {
    employeeID : getEmpId(),
    FullName : "Hadi Ahmad",
    Department : "Finance",
    level : "Mid-Senior",
    imageURL : "imageURL",
    Salary : CalcuSalary(),
};

console.log("Employee name: " + Emp1.FullName)
console.log("Employee salary: " + (Emp1.Salary = CalcuSalary(Emp1.level)))
console.log("______________")
console.log("Employee name: " + Emp2.FullName)
console.log("Employee salary: " + (Emp2.Salary = CalcuSalary(Emp2.level)))
console.log("______________")
console.log("Employee name: " + Emp3.FullName)
console.log("Employee salary: " + (Emp3.Salary = CalcuSalary(Emp3.level)))
console.log("______________")
console.log("Employee name: " + Emp4.FullName)
console.log("Employee salary: " + (Emp4.Salary = CalcuSalary(Emp4.level)))
console.log("______________")
console.log("Employee name: " + Emp5.FullName)
console.log("Employee salary: " + (Emp5.Salary = CalcuSalary(Emp5.level)))
console.log("______________")
console.log("Employee name: " + Emp6.FullName)
console.log("Employee salary: " + (Emp6.Salary = CalcuSalary(Emp6.level)))