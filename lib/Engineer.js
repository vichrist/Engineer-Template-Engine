// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Importing employee constructor object  
const Employee = require("./employee");

// Engineer constructor extending from employee constructor 

class Engineer extends Employee {
    constructor(githubUser) {

// Assign values to the parameters given to the employee classs constructor  
      super("Foo", 1, 'test@test.com'); // using super keyword to access values from superclass constructor 
      this.githubUser = githubUser; 
    }

////////////// Engineer Class Methods //////////////
    getRole() { 
      console.log('Engineer Method: GetRole:', engineer); 
    }
  
    getGitHubUser() {
      console.log('Engineer Method: GetGitHubUser:', this.githubUser); 
    }

///////////// Method to print stats ///////////////

    printInfo() {
        console.log(`Engineer Test: GitHubUser: ${this.githubUser}`);
        engineer.getRole(); 
        engineer.getGitHubUser();  
    }
}

////////////// Parameter Value Used for Testing //////////////
    const engineer = new Engineer('GitHubUser'); 
    engineer.printInfo(); 


