// TODO: Write code to define and export the Employee class

// notes for self: instantiation of new class created
// notes for self: instantiation is object oriented, i.e. object is instance of Employee class 
class Employee {
  constructor(name, id, email) {
// the key/value pairs allow us to set values by constructor arguments via extended class 
    this.name = name; 
    this.id = id;  
    this.email = email; 
  }

////////////// Employee Class Methods //////////////
  getName() { 
    console.log('Method: GetName:', this.name); 
  }

  getID() {
    console.log('Method: GetID:', this.id); 
  }

  getEmail () {
    console.log('Method: GetEmail:', this.email); 
  }

  getRole () {
    console.log('Method: ReturnEmployeeObject:', employee);
  }

////////////// Method to Print Stats  //////////////
  printInfo() {
      console.log(`Test: Name: ${this.name}`);
      console.log(`Test: ID: ${this.id}`);
      console.log(`Test: Email: ${this.email}`);
      employee.getName(); 
      employee.getID(); 
      employee.getEmail(); 
      employee.getRole(); 
    }
  }

////////////// Parameter Values Used for Testing //////////////
  const employee = new Employee('Alice', 100, 'test@test.com')
  employee.printInfo(); 


////////////// Export Employee Class as Object for Access from other Files  //////////////

module.exports = Employee;