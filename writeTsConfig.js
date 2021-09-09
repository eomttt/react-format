const fs = require('fs');

const getTSConfig = () => `
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "baseUrl": "src"
  },
  "exclude": ["node_modules"]
}
`;

module.exports.writeTSConfig = function (projectName) {
  fs.writeFileSync(`./${projectName}/tsconfig.json`, getTSConfig(), 'utf8');
}
