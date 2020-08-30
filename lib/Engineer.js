// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Importing employee constructor object  
const Employee = require("./Employee");

// Engineer constructor extending from employee constructor 

class Engineer extends Employee {
    constructor(name, id, email, github) {

// Assign values to the parameters given to the employee classs constructor  
      super(name, id, email); // using super keyword to access values from superclass constructor 
      this.github = github; 
    }

////////////// Engineer Class Methods //////////////
    getRole() { 
      return "Engineer";  
    }
  
    getGithub() {
      return this.github;  
    }

///////////// Method to print stats ///////////////

    printInfo() {
        console.log(`Engineer Test: GitHub: ${this.github}`);
        engineer.getRole(); 
        engineer.getGithub();  
    }
}

////////////// Parameter Values Used for Testing //////////////
    const engineer = new Engineer('Foo', 1, 'test@test.com', 'GitHubUser'); 
    engineer.printInfo(); 

////////////// Exporting Engineer Object  //////////////

    module.exports = Engineer;
