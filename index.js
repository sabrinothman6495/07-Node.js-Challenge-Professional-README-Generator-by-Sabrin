// TODO: Include packages needed for this application

import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information for your project?",
    },
    {
        type: "input",
        name: "tests",
        message: "What are the test instructions for your project?",
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines for your project?",
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license for your project.",
        choices: ["MIT", "GPL", "Apache 2.0", "ISC", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Success! Your README.md file has been generated")
    );
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("Sample README.md", generateMarkdown(data));
    });
}


// Function call to initialize app
init();