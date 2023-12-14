// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // Implement logic to return the appropriate badge URL based on the license
  // If no license, return an empty string
  return '';
}

// Create a function that returns the license link
function renderLicenseLink(license) {
  // Implement logic to return the appropriate license URL
  // If no license, return an empty string
  return '';
}

// Create a function that returns the license section of README
function renderLicenseSection(license) {
  // Implement logic to return the license section content
  // If no license, return an empty string
  return '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
  # ${data.title} ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  // Add more sections based on your needs

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${licenseSection}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  GitHub: [${data.username}](https://github.com/${data.username})
  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
