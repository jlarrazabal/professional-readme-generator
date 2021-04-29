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
    type: 'input',
    name: 'appContributions',
    message: 'How can others contribute to your application?'
  },
  {
    type: 'input',
    name: 'appTest',
    message: 'How can your application be tested?'
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

// TODO: Create a function to write README file

function writeToFile(template) {
  fs.writeFile("NEWREADME.MD", template, function (err) {
  if (err) throw err;
  console.log('Updated!');
});


}

// TODO: Create a function to initialize app

function init() {
  let newAnswer = inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
    let template =
    `# ${answers.appName}\n
    ## ${answers.appDescription}\n
    ## Table of content\n
    - [Installation] (#installation)\n
    - [Usage] (#usage)\n
    - [Contributions-Guidelines] (#contributions-guidelines)\n
    - [Tests] (#tests)\n
    - [License] (#license)\n
    - [Questions] (#questions)\n
    ## Installation\n
    ${answers.appInstallation}\n
    ## Usage\n
    ${answers.appUsage}\n
    ## Constributions-Guidelines\n
    ${answers.appContributions}\n
    ## Tests\n
    ${answers.appTest}\n
    ## License\n
    ${answers.appLicense}\n
    ## Questions\n
    - For mor information please visit https://github.com/${userAnswers.appGitHubUserName}\n
    - In case of questions feel free to contact me at ${userAnswers.appUserEmail}\n
    `;
    writeToFile(template);
  });
}

// Function call to initialize app
init();
