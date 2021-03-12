const fs = require('fs');

const getTSConfig = () => `
{
  "compilerOptions": {
     "allowJs": true,
     "esModuleInterop": true,
     "sourceMap": true,
     "noImplicitAny": true,
     "moduleResolution": "node",
     "module": "commonjs",
     "target": "es6",
     "jsx": "react",
     "outDir": "build",
     "baseUrl": "src",
     "lib": [
       "dom",
       "esnext"
     ],
   },
   "exclude": [
     "node_modules"
   ]
 }
`;

module.exports.writeTSConfig = function (projectName) {
  fs.writeFileSync(`./${projectName}/tsconfig.json`, getTSConfig(), 'utf8');
}
