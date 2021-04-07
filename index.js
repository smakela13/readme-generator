// Packages required for the application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('./utils/generateMarkdown');

// Questions for the user to answer
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
        type: 'input',
        name: 'credits',
        message: 'List any collaborators or those you wish to credit here.',
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
        name: 'contributing',
        message: 'Input guidelines on how one would contribute to your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to test your project.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Include your email address.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Include your GitHub profile link.',
    },
];

// Function writes the README file using fs
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, (err) =>
        err ? console.log(err) : console.log('Successfully created the README file!')
    );
 }

// Function initializes the application
function init() {
    console.log('To get started, please answer the following questions about your application:');
    inquirer.prompt(questions)
        .then((answers) => {
            const userContent = utils(answers);
        writeToFile('userREADME.md', userContent);
        });
}

// Function call to initialize app
init();
