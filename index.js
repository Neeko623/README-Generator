
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
// Generate markdown function
const generateMarkdown = require("/Users/neekotang/Desktop/new2/generateMarkdown.js");

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'rawlist',
        name: 'Table of Content',
        message: 'Choose a content.',
        choices: [
          'Installation',
          'Usage',
          'Credits',
          'License',
        ],
    },
      {
        type: 'rawlist',
        name: 'Languages',
        message: 'What did you this project with?',
        choices: [
          'HTML', 
          'CSS', 
          'Node'
        ],
      },
      {
          type: 'input',
          name: 'Installation',
          message: 'Enter installation instructions for your project. If applicable, provide a step-by-step description of how to get the development environment running.'
      },
      {
          type: 'input',
          name: 'Usage',
          message: 'Enter instructions and examples for use. Include screenshots as needed.'
      },
      {
          type: 'rawlist',
          name: 'License',
          message: 'Choose a license for your project by selecting a number.',
          choices: [
              'ISC',
              'MIT',
              'The Unlicense',
          ],
          default: 'MIT'
      },
      {
          type: 'input',
          name: 'Contributing',
          message: 'If you would like other developers to contribute to this project, enter contribution guidelines for how to do so.'
      },
      {
          type: 'input',
          name: 'Tests',
          message: 'If you have tests for your application, enter test instructions and provide examples on how to run them.'
      },
      {
          type: 'input',
          name: 'Questions',
          message: 'If applicable, enter additional instructions on how to reach you with questions.',
      }
];

let promptUser = () => {
    return inquirer.prompt(questions);
}
const writeToFile = util.promisify(fs.writeFile);

// initialize program
let init = async () => {
    console.log("Welcome to the README.md Generator! Please answer the following prompts!");
    try {
        const answers = await promptUser();
        console.log(answers);
        const readme = generateMarkdown(answers);
        await writeToFile("README.md", readme);
        console.log("Successfully created README.md");

    } catch (err) {
        console.log(err);
    }
}
init();
