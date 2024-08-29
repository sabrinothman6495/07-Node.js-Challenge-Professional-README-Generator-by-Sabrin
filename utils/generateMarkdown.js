// TODO: Create a function that returns a license badge based on which license is passed in
function generateLicenseBadge(license) {
    if (license !== 'None') {
        return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
    }
    return '';
}
// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
    if (license === "MIT") {
        return "[MIT](https://opensource.org/licenses/MIT)";
    } else if (license === "Apache") {
        return "[Apache](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "GPL") {
        return "[GPL](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "ISC") {
        return "[ISC](https://opensource.org/license/isc-license-txt)";
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License\nThis project is licensed under the ${renderLicenseLink(license)} license. ${generateLicenseBadge(license)}`;
    }
    return '';
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
    return `
# ${generateLicenseBadge(data.license)}
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)


## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

## License
This project is licensed under the ${renderLicenseSection(data.license)} license.

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}). You can also find more of my work at [GitHub Profile](https://github.com/${data.github}) 
`;
}


export default generateMarkdown;
