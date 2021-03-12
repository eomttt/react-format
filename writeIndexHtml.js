const fs = require('fs');

const getIndexHtml = () => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React Format</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

module.exports.writeIndexHtml = function (projectName) {
  fs.writeFileSync(`./${projectName}/src/index.html`, getIndexHtml(), 'utf8');
}
