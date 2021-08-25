// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions =[{
            type: "input",
            name: "Title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project:"
        },
        {
            type: "input",
            name: "Table of Contents",
            message: "Create table of contents:"
        },
        {
            type: "input",
            name: "install",
            message: "What installation is needed? "
        },
        {
            type: "input",
            name: "Usage",
            message: "In what way would you use this project?"
        },
        {
            type: "input",
            name: "Credits",
            message: "Who created this project? (github username?) "
        },
        {
            type: "input",
            name: "License",
            message: "What licencse is being used for this project?"
        }]

// TODO: Create a function to write README file
function wrtteToFIle(fileName, data) {

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
        writeToFile("README.md", generatorMarkdown(data));}
    )
}

// Function call to initialize app
init();
