function generateMarkdown(response) {
    return `
    #  Title: ${response.title}
  
    ## Description
    ${response.description}
  
    ## Table of Contents
  
    * [Installation](#installation)
  
    * [Usage](#usage)
  
    * [License](#license)
  
    * [Badge](#badge)
  
    * [Contributors](#contributors)
  
    * [Tests](#tests)
  
     ## Installation:
    ${response.installation}
   
    ## Usage:
    ${response.usage}
    
    ## License:
    ![GitHub License] {https://img.shields.io/badge/license-${response.license}-blue.svg}
  
    ## Badge: 
    ![NPM LIcense](https://img.shields.io/badge/License%20-NPM-red)
  
    ## Contributors:
    ${response.contributors}  
  
    ## Test:
    ${response.test}
  
    ## Questions: 
    If you have any questions about this project feel free to reach out to me via email at ${response.email}. You can also follow me via GitHub at https://github.com/${response.github}
  
    ## Video Link: 
    https://drive.google.com/file/d/1R5Znj2HpUvmH4qaLSPNgTULV42f2Crbl/view 
    `;
  
    }
    module.exports = generateMarkdown;
  