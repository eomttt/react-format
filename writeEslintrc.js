const fs = require('fs');
const getEslintrc = (isTypeScript) => `
{
  ${isTypeScript ? '"parser": "@typescript-eslint/parser",' : ''}
  "parserOptions": ${isTypeScript ? `{
    "project": "./tsconfig.json",
    "sourceType": "module"
  }`: `{
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  }`},
  "env": {
    "browser": true,
    "es6": true
  },
  "plugins": ${isTypeScript ? `[
    "react",
    "prettier",
    "@typescript-eslint"
  ]` : `[
    "react",
    "prettier",
  ]`},
  "extends": [
    "plugin:react/recommended",
    ${isTypeScript ? "plugin:@typescript-eslint/recommended" : ''},
    "plugin:prettier/recommended"
  ],
  "rules": {}
}

`;

module.exports.writeEslintrc = function (projectName, isTypeScript) {
  fs.writeFileSync(`./${projectName}/.eslintrc`, getEslintrc(isTypeScript), 'utf8');
}
