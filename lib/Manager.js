// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.


// Importing employee constructor object  
const Employee = require("./employee");

// Manager constructor extending from employee constructor 

class Manager extends Employee {
    constructor(officeNumber) {

// Assign values to the parameters given to the employee classs constructor  
      super("Foo", 1, 'test@test.com'); // using super keyword to access values from superclass constructor 
      this.officeNumber = officeNumber; 
    }

////////////// Manager Class Methods //////////////
    getRole() { 
      console.log('Manager Method: GetRole:', manager); 
    }
  
    getOfficeNumber() {
      console.log('Manager Method: GetOfficeNumber:', this.officeNumber); 
    }

///////////// Method to print stats ///////////////

    printInfo() {
        console.log(`Manager Test: OfficeNumber: ${this.officeNumber}`);
        manager.getRole(); 
        manager.getOfficeNumber();  
    }
}

////////////// Parameter Value Used for Testing //////////////
    const manager = new Manager(100); 
    manager.printInfo(); 