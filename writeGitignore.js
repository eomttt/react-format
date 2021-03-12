const fs = require('fs');

const getGitIgnore = () => `
  # dependencies
  /node_modules
  /.pnp
  .pnp.js

  # testing
  /coverage

  # production
  /build

  # misc
  .DS_Store
  .env.local
  .env.development.local
  .env.test.local
  .env.production.local

  npm-debug.log*
  yarn-debug.log*
  yarn-error.log*
`;

module.exports.writeGitignore = function (projectName) {
  fs.writeFileSync(`./${projectName}/.gitignore`, getGitIgnore(), 'utf8');
}
