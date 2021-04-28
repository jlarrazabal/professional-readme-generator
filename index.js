// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'appName',
    message: "What is the name of your application?"
  },
  {
    type: 'input',
    name: 'appDescription',
    message: "Please provide a short description of your application?"
  },
  {
    type: 'input',
    name: 'appInstallation',
    message: "How can your application be installed?"
  },
  {
    type: 'input',
    name: 'appUsage',
    message: "How can you application be used?"
  },
  {
    type: 'list',
    name: 'appLicense',
    message: 'Under what license is your application covered?',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
  },
  {
    type: 'input',
    name: 'appGitHubUserName',
    message: "What is your GitHub username?"
  },
  {
    type: 'input',
    name: 'appUserEmail',
    message: "What is your email?"
  },
];

let newAnswer = inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
  return answers;
});

// TODO: Create a function to write README file

function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app

function init() {}

// Function call to initialize app
init();
