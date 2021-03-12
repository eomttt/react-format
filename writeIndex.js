const fs = require('fs');

const getIndex = () => `
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />,document.getElementById('root'));
`;

module.exports.writeIndex = function (projectName, isTypeSciprt) {
  fs.writeFileSync(`./${projectName}/src/index.${isTypeSciprt ? 'tsx' : 'jsx'}`, getIndex(), 'utf8');
}
