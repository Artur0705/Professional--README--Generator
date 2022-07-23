
// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)


  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
   
  ## Installation
  ${data.install}


  ## License
  This project is licensed under ${data.license}

  ## Contributing
  ${data.contributors}

  ## Tests
  ${data.test}


  ## Questions
  If you have any questions regarding the project you can contact me directly at ${data.email}.
  Please feel free to view more of my projects at https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
