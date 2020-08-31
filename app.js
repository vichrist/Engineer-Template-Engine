const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
console.log(inquirer); 
const path = require("path");
const fs = require("fs");
const util = require('util');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// const generateMarkdown = require('./generateMarkdown'); --------------------think I need to change here --------------------------
const writeFileAsync = util.promisify(fs.writeFile); //my code 

const promptUser = () => {
    return inquirer.prompt([
          {
            type: "input",
            message: "Input 'manager' to update manager info. Hit enter to bypass if n/a",
            name: "role"
          },
          {
            type: "input",
            message: "What is your managers name? Hit enter to bypass if n/a",
            name: "nameM"
          },
          {
            type: "input",
            message: "what is your managers id? Hit enter to bypass if n/a",
            name: "idM"
          },
          {
              type: "input",
              message: "what is your managers email? Hit enter to bypass if n/a",
              name: "emailM"
          },
          {
            type: "input",
            message: "what is your managers office number? Hit enter to bypass if n/a",
            name: "officeNumberM"
          },
          {
            type: "list",
            message: "Select the type of employee to add",
            name: "roleI", 
            choices: [ 
                'Intern', 
                'Engineer', 
                'I am finished adding team members'
            ]
          },
          {
            type: "input",
            message: "What is your interns name? Hit enter to bypass if n/a",
            name: "nameI"
          },
          {
            type: "input",
            message: "what is your interns id? Hit enter to bypass if n/a",
            name: "idI"
          },
          {
              type: "input",
              message: "what is your interns email? Hit enter to bypass if n/a",
              name: "emailI"
          },
          {
            type: "input",
            message: "What school does your intern attend? Hit enter to bypass if n/a",
            name: "school", 
          },
          {
            type: "list",
            message: "Select the type of employee to add",
            name: "roleE", 
            choices: [ 
                'Intern', 
                'Engineer', 
                'I am finished adding team members'
            ]
          },
          {
            type: "input",
            message: "What is your engineers name? Hit enter to bypass if n/a",
            name: "nameE"
          },
          {
            type: "input",
            message: "what is your engineers id? Hit enter to bypass if n/a",
            name: "idE"
          },
          {
              type: "input",
              message: "what is your engineers email? Hit enter to bypass if n/a",
              name: "emailE"
          },
          {
            type: "input",
            message: "What is your engineers GitHub user ID? Hit enter to bypass if n/a",
            name: "GithubUser", 
          },
        ])

//  .then((data) => {
//     if (data.name === 0) { 
//         prompt("What school do you attend?");    
//     }
//     else if (data.name === 1) {
//         prompt("What is your GitHub user ID?");
//     } else console.log("all done");
//  });
};
 

const init = async () => {
    console.log('starting prompts');
    try {
        //store answers to prompts 
        const answers = await promptUser(); 
        //stored readme in variable 
        const html = generateHTML(answers); 
        //write file (just call the function) once html is generated 
        writeFileAsync('team.html', html);
        console.log('successfully wrote to team.html');
    } catch (error) {
        console.log(error); 
    }
}; 
    init(); 


function generateHTML(response) {
    return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
          </head>
            <body>
            <div class="card1">
                <div class="card-header">
                    <h2 class="card-title">${response.nameM}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${response.role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                    <li class="list-group-item">ID: ${response.idM}</li>
                    <li class="list-group-item">Email: <a href="mailto:{{ email }}">${response.emailM}</a></li>
                    <li class="list-group-item">Office number: ${response.officeNumberM}</li>
                    </ul>
                </div>
            </div>

            <div class="card2">
                <div class="card-header">
                    <h2 class="card-title">${response.nameI}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${response.roleI}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${response.idI}</li>
                        <li class="list-group-item">Email: <a href="mailto:{{ email }}">${response.emailI}</a></li>
                        <li class="list-group-item">School: ${response.school}</li>
                    </ul>
                </div>
            </div>     
            <div class="card3">
                <div class="card-header">
                    <h2 class="card-title">${response.nameE}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${response.roleE}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${response.idE}</li>
                        <li class="list-group-item">Email: <a href="mailto:{{ email }}">${response.emailE}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/{{ github }}" target="_blank" rel="noopener noreferrer">${response.GithubUser}</a></li>
                    </ul>
                </div>
            </div>
          </body>
        </html>`;
    }




































      
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
