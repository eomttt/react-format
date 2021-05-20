const fs = require('fs');

const getBabelrc = (isTypeSciprt) => `
{
  "presets": ${isTypeSciprt ? `[
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]` : `[
    "@babel/preset-env",
    "@babel/preset-react"
  ]`},
  "plugins": [
   [
     "module-resolver",
     {
       "root": ["./src"]
     }
   ], [
    "@babel/plugin-transform-runtime"
    ]
  ]
 }
`;

module.exports.writeBabelrc = function (projectName, isTypeSciprt) {
  fs.writeFileSync(`./${projectName}/.babelrc`, getBabelrc(isTypeSciprt), 'utf8');
}
