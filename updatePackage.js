const fs = require('fs');

module.exports.updatePackageScript = function (projectName) {
  const packageJSON = fs.readFileSync(`./${projectName}/package.json`, 'utf-8');
  const packageObj = JSON.parse(packageJSON);
  packageObj.scripts = {
    dev: 'cross-env NODE_ENV=development webpack serve --mode development --open',
    build: 'cross-env NODE_ENV=production webpack --mode production'
  }
  fs.writeFileSync(`./${projectName}/package.json`, JSON.stringify(packageObj, null, 2), 'utf-8')
}