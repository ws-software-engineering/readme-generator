// Import definitions for the 'README Generator'
// 'generateMarkdown' : Builds the layout for the Markdown file; Contains logic for displaying license information.
// 'fileURLToPath' : Converts the path to a properly encoded file.

// Project Dependencies 
// 1. inquirer : handles the questions needed for the Markdown file generation.
// 2. colors : gives unique styling to terminal prompts.
// 3. path : provides ability to work with file paths.
// 4. fs : module allowing ability to work with files i.e., read, write, append etc. 

import generateMarkdown from './utils/generateMarkdown.js';
import { fileURLToPath } from 'url';
import inquirer from "inquirer";
import colors from "colors";
import path from 'path';
import fs from "fs";


// Specifies the current folder location automatically.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Array of prompts needed to generate the markdown file content.
const questions = [
    "What is your project title?",
    "Enter a description",
    "What are the installation steps required for your project?",
    "Provide instructions for proper usage",
    "What are the guidelines for contributing to the project repository?",
    "Provide the instructions for testing the application",
    "Add your GitHub username",  // Link is entered into the 'Questions' section of the README.
    "Enter your email address", // Added to the 'Questions' section with instructions about how to reach the author.
    "What are the licensing requirements for the project?", // Choose from a list of options. Output : a badge is entered at the top of the README file.
];

// The unique keys needed to retrieve the user's answers from the 'Inquirer' prompts.
const names = [
    "title",
    "description",
    "installations",
    "instructions",
    "tests",
    "guidelines",
    "username",
    "email",
];

// Dynamically creates the prompts using: (questions, names).
const prompts = names.map(promptName => {
    let promptNames;
    return promptNames = {
        name: promptName,
        type: "input",
        message: colors.brightMagenta(questions[names.indexOf(promptName)])
    }
});

// Function for gathering user input and writing the markdown file.
function userPromptQuestions(questions) {
    inquirer
        .prompt([
            ...prompts,
            {
            name: "license",
            type: "list",
            message: questions[8],
            choices: [
                'apache',
                'bsd_2',
                'bsd_3',
                'mit',
                'mozilla',
                'attribution',
                'none'
            ]
            },
        ])
    .then((answers) => {
        const data = generateMarkdown(answers);
        const fileName = "README.md";
        writeToFile(fileName, data);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error(error.isTtyError);
        } else {
            console.error(error);
        }
    });
}

// Writes the markdown file to the current directory.
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(__dirname + `/${fileName}`, data);
    } catch (err) {
        console.error(err)
    } 
}

// Function initializes the application.
function init() {
   userPromptQuestions(questions);
}

init();

