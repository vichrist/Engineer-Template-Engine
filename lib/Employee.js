// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, getName, getID, getEmail, getRole) {
      this.name = name;
      this.id = id;
      this.email = email;
    //   this.getName = getName(); 
    //   this.getID = getID();
    //   this.getEmail = getEmail(); 
    //   this.getRole = getRole(); //returns employee 
    }
  
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
        // console.log(`getName: ${this.getName}`); 
        // console.log(`getID: ${this.getID}`); 
        // console.log(`getEmail: ${this.getEmail}`); 
        // console.log(`getRole: ${this.getRole}`); 
      }
    }

    /////////////////////////// this code just to test //////////////////////
    // const employee = new Employee('Christal', 246, 'c.vigil27@gmail.com')
    // employee.printInfo(); 
  
  module.exports = Employee;