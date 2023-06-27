const axios = require('axios');
const fs = require('fs');

const owner = 'arpittyagirocks';
const repo = 'Humari-Dukan';

// Fetch the contributors from the GitHub API
axios.get(`https://api.github.com/repos/${owner}/${repo}/contributors`)
  .then((response) => {
    // Generate the contributors section in markdown format
    let contributorsSection = '## Contributors\n\n';
    response.data.forEach((contributor) => {
      contributorsSection += `- ${contributor.login}\n`;
    });

    // Read the existing README.md file
    fs.readFile('README.md', 'utf8', (readError, data) => {
      if (readError) {
        console.error(`Error reading README.md: ${readError}`);
        return;
      }

      // Update the contributors section in the README content
      const updatedReadmeContent = data.replace(
        /## Contributors[\s\S]*## Contributors-END/,
        `## Contributors\n\n${contributorsSection}\n\n## Contributors-END`
      );

      // Write the updated content back to the README.md file
      fs.writeFile('README.md', updatedReadmeContent, 'utf8', (writeError) => {
        if (writeError) {
          console.error(`Error writing to README.md: ${writeError}`);
          return;
        }
        console.log('Contributors section updated in README.md');
      });
    });
  })
  .catch((error) => {
    console.error(`Error fetching contributors: ${error}`);
  });
