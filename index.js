// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write instructions to describe how to install your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick a license for your project.',
        choices: [
            'Apache License 2.0',
            'Boost Software License 1.0',
            'GNU GPLv2',
            'GNU GPLv3',
            'MIT License',
            'Mozilla Public License 2.0', 
            'The Unlicense',
        ]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Input guidelines on how one would contribute to your project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide examples on how to test your project.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Let the user know how they can ask questions.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers);
 }


// TODO: Create a function to initialize app
function init() {
    console.log('To get started, please answer the following questions about your application:');
    inquirer.prompt(questions)
        .then((answers) => {
            const userContent = utils(answers);
        writeToFile('README.md', userContent);
    });
}

// Function call to initialize app
init();
