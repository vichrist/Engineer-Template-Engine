// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.


// Importing employee constructor object  
const Employee = require("./employee");

// Manager constructor extending from employee constructor 

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      
// Assign values to the parameters given to the employee classs constructor  
      super(name, id, email); // using super keyword to access values from superclass constructor 
      this.officeNumber = officeNumber; 
    }

////////////// Manager Class Methods //////////////
    getRole() { 
         return 'Manager'; 
    }
  
    getOfficeNumber() {
        return manager.officeNumber; 
    }

///////////// Method to print stats ///////////////

    printInfo() {
        console.log(`Manager Test: OfficeNumber: ${this.officeNumber}`);
        manager.getRole(); 
        manager.getOfficeNumber();  
    }
}

////////////// Parameter Value Used for Testing //////////////
    const manager = new Manager('Foo', 1, 'test@test.com', 100); 
    manager.printInfo(); 

////////////// Exporting Manager Object  //////////////

    module.exports = Manager;