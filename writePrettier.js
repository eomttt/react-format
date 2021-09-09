const fs = require('fs');

const getPrettier = () => `
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 120,
  "arrowParens": "avoid"
 }
`;

module.exports.writePrettier = function (projectName) {
  fs.writeFileSync(`./${projectName}/.prettierrc`, getPrettier(), 'utf8');
}
