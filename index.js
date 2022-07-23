// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");

const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
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

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
