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

let emp1 = new Employee("Ghazi Samer", "Administration","Senior","https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fgroup-people-illustration-set_52683-33806.jpg%3Fw%3D2000&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fpeople-illustration&tbnid=TyVr2KLEbF_rZM&vet=12ahUKEwirhOjlkrf5AhVohc4BHaWqBh8QMygAegUIARCkAQ..i&docid=VuMP-z8couTF4M&w=2000&h=1333&q=people&ved=2ahUKEwirhOjlkrf5AhVohc4BHaWqBh8QMygAegUIARCkAQ")
const emp2 = new Employee("Lana Ali", "Finance", "Senior",'./empimag/lana.jpg')
const emp3 = new Employee("Tamara Ayoub", "Marketing", "Senior",'./empimag/tamara.jpg')
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

    const div = document.createElement('div')
    let imgEmp = document.createElement('img')
    imgEmp.src = this.employeeImage;
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


