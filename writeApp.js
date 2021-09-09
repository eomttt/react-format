const fs = require('fs');

const getApp = (isTypeScript) => `import React, { ReactNode } from 'react';

const App = ()${isTypeScript ? ': ReactNode' : ''} => <>React Format</>;

export default App;
`;

module.exports.writeApp = function (projectName, isTypeScript) {
  fs.writeFileSync(`./${projectName}/src/App.${isTypeScript ? 'tsx' : 'jsx'}`, getApp(isTypeScript), 'utf8');
}
