' use strict';

var id = 1000;

var employeeList = [];
function Employee (emplyeeName, employeeDepartment, employeelevel, employeeImage){
    this.employeeid = function() {
        return id++;
    };
    this.fullName = emplyeeName;
    this.department = employeeDepartment;
    this.level = employeelevel;
    this.imageURL = employeeImage;
    this.salary = function () {
        let salary;

        if (this.level === "Senior"){
            salary = Math.floor(Math.random()*(2000-1500)+1500);
        }
        else if (this.level === "Mid-Senior") {
            salary = Math.floor(Math.random()*(1500-1000)+1000);
        }
        else if (this.level === "Junior") {
            salary = Math.floor(Math.random()*(1000-500)+500);
        }
        return salary;
    };
    employeeList.push(this);
};

Employee.prototype.netSalary = function(){
    return this.salary() - (this.salary() * 0.075)
}

Employee.prototype.printInfo = function(){
    document.write(`<h5>Employee name: ${this.fullName} </h5><br>
    <h5>Department: ${this.department}</h5><br>
    <h5>Employee salary: ${this.salary()}</h5><br>
    ___________________________<br>`)
    
}

let emp1 = new Employee("Ghazi Samer", "Administration","Senior",'./empEmage/ghazi.jpg')

// console.log(emp1.employeeid())
// console.log(emp1.salary())
// console.log(emp1.netSalary())
const emp2 = new Employee("Lana Ali", "Finance", "Senior",'./empEmage/lana.jpg')
// console.log(emp2.employeeid())
// console.log(emp2.salary())
const emp3 = new Employee("Tamara Ayoub", "Marketing", "Senior",'./empEmage/tamara.jpg')
const emp4 = new Employee("Safi Walid", "Administration", "Mid-Senior",'./empEmage/safi.jpg')
const emp5 = new Employee("Omar Zaid", "Development", "Senior",'./empEmage/omar.jpg')
const emp6 = new Employee("Rana Saleh", "Development", "Junior",'./empEmage/rana.jpg')
const emp7 = new Employee("Hadi Ahmad", "Finance", "Mid-Senior",'./empEmage/hadi.jpg')

// emp1.printInfo()
// emp2.printInfo()
// emp3.printInfo()
// emp4.printInfo()
// emp5.printInfo()
// emp6.printInfo()
// emp7.printInfo()

const divInfo = document.getElementById('divInfo')
Employee.prototype.printData = function(){

    const imgEmp = document.createElement('img')
    imgEmp.src = this.employeeImage;
    imgEmp.alt = this.fullName;
    divInfo.appendChild(imgEmp)

    const pEmp = document.createElement('p')
    pEmp.textContent = `Name: ${this.fullName} - ID: ${this.employeeid()} - Deparatment: ${this.department} - Level: ${this.level} - ${this.netSalary()}`
    divInfo.appendChild(pEmp)

}


emp1.printData()
emp2.printData()
emp3.printData()
emp4.printData()
emp5.printData()
emp6.printData()
emp7.printData()