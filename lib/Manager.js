// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./employee");

class Manager extends Employee {
    constructor (officeNumber) {
        console.log(Manager); //need to input something else here 
    super(officeNumber); 
    this.officeNumber = officeNumber; 
    }
}

const manager = new Manager('720-891-6797'); 
manager.printInfo();