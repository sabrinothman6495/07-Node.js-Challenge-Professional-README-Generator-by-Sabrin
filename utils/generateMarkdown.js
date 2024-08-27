// TODO: Create a function that returns a license badge based on which license is passed in
function generatelicenceBadge(license) {
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
generatelicenceBadge("MIT");    
generatelicenceBadge("Apache");
generatelicenceBadge("GPL");
generatelicenceBadge("ISC");
generatelicenceBadge("None");

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
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    } else {
        return `## License
        This project is licensed under the ${renderLicenseLink(license)} ${generatelicenceBadge(license)} license.`;
    }
}
renderLicenseSection("MIT");
renderLicenseSection("Apache");
renderLicenseSection("GPL");
renderLicenseSection("ISC");
renderLicenseSection("None");
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const markdown = `# ${data.title}
## ${data.description}
## ${data.tableofcontents}
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Tests
${data.test}
## License
${renderLicenseLink(data.license)}
${generatelicenceBadge(data.license)}
## Get in contact:

- GitHub: [${data.github}]
- Email: ${data.email}`;
    return markdown;
}

export default generateMarkdown;