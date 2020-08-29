// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Intern extends Employee {
    constructor (school, getSchool) {
        console.log(Intern); //need to input something else here 
    super(school, getSchool); 
    this.school = school; 
    this.getSchool = getSchool;
    }
}

const intern = new Intern('DU Bootcamp', 'getSchool'); //need to update argument being passed 
intern.printInfo();