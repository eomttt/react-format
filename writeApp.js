const fs = require('fs');

const getApp = () => `
import React from 'react';

const App = () => (
  <>
  React Format
  </>
);

export default App;
`;

module.exports.writeApp = function (projectName, isTypeSciprt) {
  fs.writeFileSync(`./${projectName}/src/App.${isTypeSciprt ? 'tsx' : 'jsx'}`, getApp(), 'utf8');
}
