var id=999;
function getEmpId () {
    return id++;
};

function calcuSalary(level){
    let salary;
    
    if (level === "Senior") {
        salary = Math.floor(Math.random()*(2000-1500)+1500);
        
    }
    else if (level === "Mid-Senior") {
        salary = Math.floor(Math.random()*(1500-1000)+1000);
    }
    else if (level === "Junior") {
        salary = Math.floor(Math.random()*(1000-500)+500);
    }
    return salary;
};





var Emp1 = {
    employeeID : getEmpId(),
    fullName : "Ghazi Samer",
    department : "Administration",
    level : "Senior",
    imageURL : "",
    salary : calcuSalary(),
    netSalary : function () {
        return salary = this.salary - (this.salary * 0.075)
    }

};

var Emp2 = {
    employeeID : getEmpId(),
    fullName : "Lana Ali",
    department : "Finance",
    level : "Senior",
    imageURL : "imageURL",
    salary : calcuSalary(),
    netSalary : function () {
        return salary = this.salary - (this.salary * 0.075)
    }
};

var Emp3 = {
    employeeID : getEmpId(),
    fullName : "Tamara Ayoub",
    department : "Marketing",
    level : "Senior",
    imageURL : "imageURL",
    salary : calcuSalary(),
    netSalary : function () {
        return salary = this.salary - (this.salary * 0.075)
    }
};

var Emp4 = {
    employeeID : getEmpId(),
    fullName : "Safi Walid",
    department : "Administration",
    level : "Mid-Senior",
    imageURL : "imageURL",
    salary : calcuSalary(),
    netSalary : function () {
        return salary = this.salary - (this.salary * 0.075)
    }
};

var Emp5 = {
    employeeID : getEmpId(),
    fullName : "Omar Zaid",
    department : "Development",
    level : "Senior",
    imageURL : "imageURL",
    salary : calcuSalary(),
    netSalary : function () {
        return salary = this.salary - (this.salary * 0.075)
    }
};

var Emp5 = {
    employeeID : getEmpId(),
    fullName : "Rana Saleh",
    department : "Development",
    level : "Junior",
    imageURL : "imageURL",
    salary : calcuSalary(),
    netSalary : function () {
        return salary = this.salary - (this.salary * 0.075)
    }
};

var Emp6 = {
    employeeID : getEmpId(),
    fullName : "Hadi Ahmad",
    department : "Finance",
    level : "Mid-Senior",
    imageURL : "imageURL",
    salary : calcuSalary(),
    netSalary : function () {
        return salary = this.salary - (this.salary * 0.075)
    }
};

Emp1.salary = calcuSalary(Emp1.level);
console.log("Employee name: " + Emp1.fullName)
console.log("Employee salary: " + Emp1.salary)
console.log("______________")
Emp1.salary = calcuSalary(Emp2.level);
console.log("Employee name: " + Emp2.fullName)
console.log("Employee salary: " + (Emp2.salary = calcuSalary(Emp2.level)))
console.log("______________")
Emp1.salary = calcuSalary(Emp3.level);
console.log("Employee name: " + Emp3.fullName)
console.log("Employee salary: " + (Emp3.salary = calcuSalary(Emp3.level)))
console.log("______________")
Emp1.salary = calcuSalary(Emp4.level);
console.log("Employee name: " + Emp4.fullName)
console.log("Employee salary: " + (Emp4.salary = calcuSalary(Emp4.level)))
console.log("______________")
Emp1.salary = calcuSalary(Emp5.level);
console.log("Employee name: " + Emp5.fullName)
console.log("Employee salary: " + (Emp5.salary = calcuSalary(Emp5.level)))
console.log("______________")
Emp1.salary = calcuSalary(Emp6.level);
console.log("Employee name: " + Emp6.fullName)
console.log("Employee salary: " + (Emp6.salary = calcuSalary(Emp6.level)))