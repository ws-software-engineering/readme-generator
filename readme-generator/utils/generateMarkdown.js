// File Definition : Builds the README.md file section entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests and Questions.

// 'generateLicenseInformation' : Reads the hash map of license details (Badge name, image URL & information link).
import generateLicenseInformation from '../license_information.js';

// Validates if user specifies license information. True: Returns badge image. False: returns an empty string.
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  }
  const badgeInfo = generateLicenseInformation();
  return badgeInfo[license].badge;
}

// Validates if user specifies license information. True: Returns informational website link; False: returns an empty string.
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  }
  const linkInfo = generateLicenseInformation();
  return linkInfo[license].link;
}

// Validates if user specifies license information. True: Returns formatted Markdown file; False: returns an empty string.
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  }
  return [
    `## <a id="license"></a>License ##`, 
    `- [License](#license)`
  ];
}

// Returns formatting README.md file content based on inquirer data.
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const license_section = renderLicenseSection(data.license);
  const [section, anchor] = license_section;

  return `<a id="readme-top"></a>

<!-- PROJECT TITLE -->
# <a id="title"></a>${data.title} #

${badge}

<!-- PROJECT DESCRIPTION -->
## <a id="description"></a>Description ##

${data.description}

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)
${anchor ? anchor: ''}

<!--- INSTALLATION INSTRUCTIONS -->
## <a id="installation"></a>Installation ##

${data.installations}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT USAGE -->
## <a id="usage"></a>Usage ##

${data.instructions}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TESTING REQUIREMENTS -->
## <a id="tests"></a>Tests ##

${data.tests}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTIONS -->
## <a id="contributing"></a>Contributing ##

${data.guidelines}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT/QUESTIONS -->
## <a id="questions"></a>Questions ##

For questions about the application, please contact:

**GitHub Username:** ${data.username}

**Email:** ${data.email}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE INFORMATION -->
${section ? section: ''}

${link ? `<a href="${link}">${data.license.toUpperCase()}</a>\n<p align="right">(<a href="#readme-top">back to top</a>)</p>`: ''}`
}

export default generateMarkdown;
