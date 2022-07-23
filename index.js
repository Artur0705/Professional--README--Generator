// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");

const generateTemplate = require("./utils/generateMarkdown.js");
// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project name?",
        validate: (value) => {
            if (value) {
                return true;
            } else{
                return "The value is required!"
            }
        },
    },

    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project.",
        validate: (value) => {
            if (value) {
                return true;
            } else{
                return "The value is required!"
            }
        },
    },

    {
        type: "list",
        name: "license",
        message: "What license your project should have?",
        choices: ["MIT", "GNU"],
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please select one from following options!"
            }
            
        },
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please enter your email address!"
            }

        },
    },

    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please enter your GitHub username!"
            }

        },
    },

    {
        type: "input",
        name: "install",
        message: "What are the required steps to install?",
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please enter the required steps!"
            }

        },
    },

    {
        type: "input",
        name: "usage",
        message: "How should you use this project?",
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please enter a description!"
            }

        },
    },

    {
        type: "input",
        name: "test",
        message: "What commands should be used to run test?",
        default: "npm test"
        
    },

    {
        type: "input",
        name: "contributors",
        message: "Please enter information about contributing"
    }

];

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`./${fileName.toUpperCase().split(" ").join(" ")}.md`, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Your README file has been generated")
        }
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const template = generateTemplate(data)
        writeToFile(data.title, template);

    })
}

// Function call to initialize app
init();
