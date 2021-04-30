// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'fileName',
    message: "What is the name of the file that you want to create (Ex: README.md)?"
  },
  {
    type: 'input',
    name: 'appName',
    message: "What is the name of your application?"
  },
  {
    type: 'input',
    name: 'appDescription',
    message: "Please provide a short description of your application:"
  },
  {
    type: 'input',
    name: 'appInstallation',
    message: "How can your application be installed?"
  },
  {
    type: 'input',
    name: 'appUsage',
    message: "How can your application be used?"
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

function writeToFile(template,fileName) {
  fs.writeFile(fileName, template, function(err) {
    if (err) throw err;
    console.log(`Your new file "${fileName}" has been created/updated successfully!`);
  });
}

// TODO: Create a function to initialize app

function init() {
  let newAnswer = inquirer.prompt(questions).then((answers) => {

    if(answers.fileName===""||answers.appContributions===""||answers.appDescription===""||answers.appInstallation===""||answers.appName===""||answers.appTest===""||answers.appUsage==="") {
      console.log("One or more pieces of information are missing; please provide an answer to all the questions to create your new README.md file. For your convenience, the questions will be presented again in 2 seconds.");
      setTimeout(()=>{init()},2000);
    } else {
      console.log("Your answers are: "+JSON.stringify(answers, null, '  '));
      let fileName = answers.fileName;
      let licenseBadge = "";
      switch (answers.appLicense) {
        case "GNU AGPLv3":
          licenseBadge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
          break;
        case "GNU GPLv3":
          licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
          break;
        case "GNU LGPLv3":
          licenseBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
          break;
        case "Mozilla Public License 2.0":
          licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
          break;
        case "Apache License 2.0":
          licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
          break;
        case "MIT License":
          licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
          break;
        case "Boost Software License 1.0":
          licenseBadge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
          break;
        case "The Unlicense":
          licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
          break;
      }

      let template =`# ${answers.appName}\n
        ${licenseBadge}\n
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
      ## Contributions-Guidelines\n
      ${answers.appContributions}\n
      ## Tests\n
      ${answers.appTest}\n
      ## License\n
      This application is covered under the ${answers.appLicense} license.\n
      ## Questions\n
      - For more information please visit https://github.com/${answers.appGitHubUserName}\n
      - In case of questions, feel free to contact me at ${answers.appUserEmail}\n
      `;
      writeToFile(template,fileName);
    }
  });
}
// Function call to initialize app
init();
