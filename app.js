' use strict';

var id = 1000;

var employeeList = [];
function Employee (emplyeeName, employeeDepartment, employeelevel, employeeimage){
    this.employeeid = function() {
        return id++;
    };
    this.fullName = emplyeeName;
    this.department = employeeDepartment;
    this.level = employeelevel;
    this.imageURL = employeeimage;
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

let emp1 = new Employee("Ghazi Samer", "Administration","Senior","./assets/ghazi.png")
const emp2 = new Employee("Lana Ali", "Finance", "Senior",'./assets/lana.jpg')
const emp3 = new Employee("Tamara Ayoub", "Marketing", "Senior",'./assets/tamara.jpg')
const emp4 = new Employee("Safi Walid", "Administration", "Mid-Senior",'./assets/safi.jpg')
const emp5 = new Employee("Omar Zaid", "Development", "Senior",'./assets/omar.png')
const emp6 = new Employee("Rana Saleh", "Development", "Junior",'./assets/rana.jpg')
const emp7 = new Employee("Hadi Ahmad", "Finance", "Mid-Senior",'./assets/hadi.jpg')

// emp1.printInfo()
// emp2.printInfo()
// emp3.printInfo()
// emp4.printInfo()
// emp5.printInfo()
// emp6.printInfo()
// emp7.printInfo()

const divInfo = document.getElementById('divInfo')

Employee.prototype.printData = function(){

    const div = document.createElement('div')
    let imgEmp = document.createElement('img')
    imgEmp.src = this.imageURL;
    imgEmp.alt = this.fullName;
    
    div.appendChild(imgEmp)


    const pEmp = document.createElement('p')
    pEmp.textContent = `Name: ${this.fullName} - ID: ${this.employeeid()} - Deparatment: ${this.department} - Level: ${this.level} - ${this.netSalary()}`
    div.appendChild(pEmp)

    divInfo.appendChild(div)

}

for (let index = 0; index < employeeList.length; index++) {
    employeeList[index].printData()
    
}


