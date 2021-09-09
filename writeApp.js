const fs = require('fs');

const getApp = () => `import React, { ReactNode } from 'react';

const App = (): ReactNode => <>React Format</>;

export default App;
`;

module.exports.writeApp = function (projectName, isTypeScript) {
  fs.writeFileSync(`./${projectName}/src/App.${isTypeScript ? 'tsx' : 'jsx'}`, getApp(), 'utf8');
}
