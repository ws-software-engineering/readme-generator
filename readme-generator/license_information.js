// File containing GitHub license information to be referenced in the inquirer prompts.
function generateLicenseInformation() {
    const licenseDetails = {
        apache: {
            badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)',
            link: 'https://opensource.org/licenses/Apache-2.0'
        },
        bsd_2: {
            badge: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
            link: 'https://opensource.org/licenses/BSD-2-Clause'
        },
        bsd_3: {
            badge: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)',
            link: 'https://opensource.org/licenses/BSD-3-Clause'
        },
        mit: {
            badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            link: 'https://opensource.org/licenses/MIT'
        },
        mozilla: {
            badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
            link: 'https://opensource.org/licenses/MPL-2.0'
        },
        attribution: {
            badge: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)',
            link: 'https://opendatacommons.org/licenses/by/'
        }
    }
    return licenseDetails;
}

export default generateLicenseInformation;