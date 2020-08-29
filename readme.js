const inquirer= require('inquirer'); 
const fs= require('fs'); 
const util = require('util'); 
const generateMarkdown = require('./generateMarkdown'); 

//create a promise instead of a callback function to handle asynchronous behavior --promisify is built into the util 

const writeFileAsync = util.promisify(fs.writeFile); 

//create prompt questions 
const promptUser = () => {
    return inquirer.prompt([ 
        {
            type: "input", 
            name: "title", 
            message: "What is the title of your project?"
        }, 
        {
            type: "input", 
            name: "description", 
            message: "Provide a detailed description of your project"
        },
        {
            type: "input", 
            name: "installation", 
            message: "What is the installation process?"
        },
        {
            type: "input", 
            name: "usage", 
            message: "How will this project be used?"
        },
        {
            type: "list", 
            name: "license", 
            message: "What license is used with this project?",
            choices: [
                "APACHE 2.8",
                "GPL 3.0",
                "BSD 3",
                "MIT",
                "NONE"
            ]
        },
        {
            type: "input", 
            name: "contributors", 
            message: "Who are the contributors of this project?"
        },
        {
            type: "input", 
            name: "test", 
            message: "What is the testing process for this project"
        },
        {
            type: "input", 
            name: "github", 
            message: "What is your Github user ID?"
        },
        {
            type: "input", 
            name: "email", 
            message: "What is your email address"
        },
    ]); 
}

// // trigger the request for the prompt and store as a variable --run in an async way 
const init = async () => {
    console.log('starting prompts');
    try {
        //store answers to prompts 
        const answers = await promptUser(); 
        //stored readme in variable 
        const readme = generateMarkdown(answers); 
        //write file (just call the function) once readme is generated 
        writeFileAsync('README.md', readme);
        console.log('successfully wrote to readme.md');
    } catch (error) {
        console.log(error); 
    }
}; 
    init(); 