// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// Licencse badge
const licenseBadge = value => {
  const whatLicense = value.license[0];
  let licenseLink = " "
  if (whatLicense === "GNU General Public License 2.0") {
      licenseLink = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (whatLicense === "Apache License 2.0") {
      licenseLink = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  };
  if (whatLicense === "GNU general Public License 3.0") {
      licenseLink = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  };
  if (whatLicense === "MIT") {
      licenseLink = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  return licenseLink
};

//function for generating the README
function generateMarkdown(value) {
  return `# ${value.title}
## Table of Contents:
1. [Description](#description)
2. [Installation](#install)
3. [Usage](#usage)
4. [Credit](#credit)
5. [License](#license)
6. [Questions](#questions)
## Description
${value.description}
## Installation
${value.install}
## Usage
${value.usage}
## Credit
${value.credits}
## License
${licenseBadge(value)}
## Questions
Any questions? Contact me by email!
* Email: ${value.email}`
}

module.exports = generateMarkdown;
