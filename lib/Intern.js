// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Importing employee constructor object  

const Employee = require("./employee");

// Intern constructor extending from employee constructor 

class Intern extends Employee {
    constructor (school) {
        
// Assign values to the parameters given to the employee classs constructor  
        super('Foo', 1, 'test@test.com'); // using super keyword to access values from superclass constructor 
        this.school = school; 
    }

////////////// Intern Class Methods //////////////

    getRole() { 
        console.log('Intern Method: GetRole:', intern); 
      }

    getSchool() {
        console.log('Intern Method: GetSchool:', this.school); 
      }

///////////// Method to print stats ///////////////

    printInfo() {
        console.log(`Intern Test: School: ${this.school}`);
        intern.getRole(); 
        intern.getSchool();  
    }
}

////////////// Parameter value used for testing //////////////

const intern = new Intern('UCLA'); 
intern.printInfo();