' use strict';
var id = 1000;

var employeeList = [];
function employee (emplyeeName, employeeDepartment, employeelevel, employeeImage){
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

employee.prototype.netSalary = function(){
    return this.salary() - (this.salary() * 0.075)
}

employee.prototype.printInfo = function(){
    document.write(`<h5>Employee name: ${this.fullName} </h5><br>
    <h5>Department: ${this.department}</h5><br>
    <h5>Employee salary: ${this.salary()}</h5><br>
    ___________________________<br>`)
    
}

const emp1 = new employee("Ghazi Samer", "Administration","Senior",'./img/images (5).png')
// console.log(emp1.employeeid())
// console.log(emp1.salary())
// console.log(emp1.netSalary())
const emp2 = new employee("Lana Ali", "Finance", "Senior","imageURL")
// console.log(emp2.employeeid())
// console.log(emp2.salary())
const emp3 = new employee("Tamara Ayoub", "Marketing", "Senior","imageURL")
const emp4 = new employee("Safi Walid", "Administration", "Mid-Senior","imageURL")
const emp5 = new employee("Omar Zaid", "Development", "Senior","imageURL")
const emp6 = new employee("Rana Saleh", "Development", "Junior","imageURL")
const emp7 = new employee("Hadi Ahmad", "Finance", "Mid-Senior","imageURL")

emp1.printInfo()
emp2.printInfo()
emp3.printInfo()
emp4.printInfo()
emp5.printInfo()
emp6.printInfo()
emp7.printInfo()

