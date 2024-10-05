<a id="readme-top"></a>

<!-- PROJECT TITLE -->
# <a id="title"></a>React Portfolio #

[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)

<!-- PROJECT DESCRIPTION -->
## <a id="description"></a>Description ##

A single page application containing a professional summary, portfolio, downloadable resume and a contact form.

This project contains:

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

<!--- INSTALLATION INSTRUCTIONS -->
## <a id="installation"></a>Installation ##

1. Clone the repository.

```bash
git clone https://github.com/your_username_/Project-Name.git
```
2. Run the following command in your project folder:

```bash
npm create vite
```
Select the first and second options as follows: (React, Javascript)

3. Install the NPM packages.

```bash
npm install
```

4. Run the application.

```bash
npm run dev
```

**Additional Configurations Needed**

1. Modify the 'package.json' file to update the 'scripts' object.

```json
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```

2. Update the 'vite.config.js' file.

```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT USAGE -->
## <a id="usage"></a>Usage ##

Deployed Application: <a href="#">Portfolio</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TESTING REQUIREMENTS -->
## <a id="tests"></a>Tests ##

Debugging information for Visual Studio Code 1.10+

- In the Debug panel, click the settings icon to open .vscode/launch.json. Select "Node.js" for initial setup.
- See https://github.com/microsoft/vscode for more information.
- Learn more about debugging Node.js: https://nodejs.org/en/learn/getting-started/debugging

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTIONS -->
## <a id="contributing"></a>Contributing ##

For suggestions regarding this application, please fork the repository and create a pull request. 

1. Fork the project. Instructions here: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo
2. Create a feature branch: `git checkout -b feature/<branch-name>`
3. Commit the changes: `git commit -m "<commit-message>"`
4. Push to the branch: `git push origin feature/<branch-name>`
5. Open a pull request.

**Option:** Open an issue and tag "enhancement"

Don't forget to give the project a star!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT/QUESTIONS -->
## <a id="questions"></a>Questions ##

For questions about the application, please contact:

**GitHub Username:** ws-data-engineering

**Email:** ws.data.engineering@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE INFORMATION -->
## <a id="license"></a>License ##

<a href="https://opendatacommons.org/licenses/by/">ATTRIBUTION</a>
<p align="right">(<a href="#readme-top">back to top</a>)</p>