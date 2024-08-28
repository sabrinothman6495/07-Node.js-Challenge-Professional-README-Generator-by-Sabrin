// TODO: Create a function that returns a license badge based on which license is passed in
function generateLicenceBadge(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "Apache 2.0") {
        return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "GPL") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "ISC") {
        return "[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    } else {
        return "";
    }
}
generateLicenceBadge("license");
generateLicenceBadge("Apache 2.0");
generateLicenceBadge("GPL");
generateLicenceBadge("ISC");
generateLicenceBadge("None");
generateLicenceBadge("MIT");

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
renderLicenseLink("MIT");
renderLicenseLink("Apache");
renderLicenseLink("GPL");   
renderLicenseLink("ISC");

// TODO: Create a function that returns the license section of README
function generateLicenseBadge(license) {
    if (license !== 'None') {
        return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
    }
    return '';
}
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
${data.tableOfContents}

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
For any questions, please contact me at [${data.email}](mailto:${data.email}). You can also find more of my work at ${data.githubLink}.
`;
}


export default generateMarkdown;
