// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const renderLicenseBadge = require('./utils/generateMarkdown');
const renderLicenseLink = require('./utils/generateMarkdown');
const renderLicenseSection = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() { }


// Function call to initialize app
// init();

// ------------
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What are the instructions for use?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What/who are the credits?',
            name: 'credits',
        },
        {
            type: 'list',
            message: 'What license do you want?',
            choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What are the tests for your application?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
    ])
    .then((response) => {
        fs.writeFile('README.md',
        `# ${response.title}
        ## Description

        ${response.description}

        ## Table of Contents 

        - [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)
        - [Tests](#tests)
        - [Questions](#questions)

        ## Installation

        ${response.instructions}

        ## Usage

        ${response.usage}

        ## Credits

        ${response.credits}

        ## License

        ${response.license}

        ## Badges

        ## Tests

        ${response.tests}
    
        ## Questions

        For any additional questions, reach me at ${response.email} or https://github.com/${response.username}.`

        , (err) =>
        err ? console.error(err) : console.log('Success!')
        );
    });