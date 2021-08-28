// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');


// TODO: Create an array of questions for user input
const questions =[{
            type: "input",
            name: "title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project:"
        },
        {
            type: "input",
            name: "install",
            message: "What installation is needed? "
        },
        {
            type: "input",
            name: "usage",
            message: "In what way would you use this project?"
        },
        {
            type: "input",
            name: "credits",
            message: "Who created this project? (github username?) "
        },
        {
            type: 'checkbox',
            message: 'What license did you use for this repo?',
            choices: ['GNU General Public License 2.0', 'MIT', 'Apache License 2.0', 'GNU General Public License 3.0'],
            name: 'license',
        }, 
        {
            type: 'input',
            message: 'What email can we contact you at?',
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter a valid email!');
                  return false;
                }
              }

        }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

fs.writeFile(fileName,data, function(err){
    console.log(fileName)
    console.log(data)
    if (err){
        return console.log(err)
    }
        else {
            console.log("success")
    
    }
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data)
    {
        writeToFile("README.md", generateMarkdown(data));}
    )
}

// Function call to initialize app
init();
