// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  let url;
  switch (license) {
    case 'Apache License 2.0':
      url = '[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'Boost Software License 1.0':
      url = '[![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost%20Software%201.0-yellow.svg)](https://opensource.org/licenses/BSL-1.0)';
      break;
    case 'GNU GPLv2':
      url = '[![License: GNU GPLv2](https://img.shields.io/badge/License-GNU%20GPLv2-brightgreen.svg)](https://opensource.org/licenses/GPL-2.0)';
      break;
    case 'GNU GPLv3':
      url = '[![License: GNU GPLv3](https://img.shields.io/badge/License-GNU%20GPLv3-green.svg)](https://opensource.org/licenses/GPL-3.0)';
      break;
    case 'MIT License':
      url = '[![License: MIT License](https://img.shields.io/badge/License-MIT%20License-red.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla Public License 2.0':
      url = '[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla%20Public%202.0-orange.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'The Unlicense':
      url = '[![License: The Unlicense](https://img.shields.io/badge/License-The%20Unlicense-green.svg)](https://opensource.org/licenses/unlicense)';
      break;
    default:
      url = '';
      break;
  }
  return url;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicense(data.license)}
  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  
  To install dependencies, type the following:
  \`${data.installation}\`

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  This application is licensed under ${data.license}. Click the badge for more information on how you can use this project.
  <br>
  ${renderLicense(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, type the following:
  \`${data.tests}\`

  ## Questions
  If you have any questions, feel free to reach out to me at ${data.email}. To view more of my projects, visit my profile ${data.github}.
`;
}

module.exports = generateMarkdown;
