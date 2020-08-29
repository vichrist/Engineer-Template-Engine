// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./employee");

class Engineer extends Employee {
    constructor (githubUserName, gitHub) {
        console.log(Engineer); //need to input something else here 
    super(githubUserName, gitHub); 
    this.githubUserName = githubUserName; 
    this.gitHub = gitHub; 
    }
}

const engineer = new Engineer('vichrist', 'github'); //need to pass updated argument to github
engineer.printInfo();