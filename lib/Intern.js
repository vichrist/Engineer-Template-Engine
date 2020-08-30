// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Importing employee constructor object  

const Employee = require("./employee");

// Intern constructor extending from employee constructor 

class Intern extends Employee {
    constructor (name, id, email, school) {
        
// Assign values to the parameters given to the employee classs constructor  
        super(name, id, email); // using super keyword to access values from superclass constructor 
        this.school = school; 
    }

////////////// Intern Class Methods //////////////

    getRole() { 
        return "Intern";
      }

    getSchool() {
        return this.school; 
      }

///////////// Method to print stats ///////////////

    printInfo() {
        console.log(`Intern Test: School: ${this.school}`);
        intern.getRole(); 
        intern.getSchool();  
    }
}

////////////// Parameter value used for testing //////////////

const intern = new Intern('Foo', 1, 'test@test.com','UCLA'); 
intern.printInfo();

////////////// Exporting Intern Object  //////////////

module.exports = Intern;