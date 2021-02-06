// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license == 'None') { return '';}
//   else if (license == 'ISC') {return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;}
//   else if (license == 'MIT') {return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;}
//   else if (license == 'The Unlicense') {return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;}
// }
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license = 'None') {return '';}
//   else if (license == 'ISC') {return `(https://opensource.org/licenses/ISC)`;}
//   else if (license == 'MIT') {return `(https://opensource.org/licenses/MIT)`;}
//   else if (license == 'The Unlicense') {return `(https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;}
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license) {
//     return `${renderLicenseLink(license)}${license}`
//   } else {
//     return '';
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.title}
![GitHub license](https://img.shields.io/badge/Made%20by-%40${data.username}-green)
## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)

## languages
${data.Languages} 

## Installation
${data.Installation} 

## Usage
${data.Usage}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## Questions
Contact email: ${data.email}\n
GitHub: [${data.github}](https://github.com/${data.github})\n
${data.Questions}

## License
This project is licensed under the terms of the ${data.License} license.
`;
}

module.exports = generateMarkdown;


