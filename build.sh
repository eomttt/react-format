#! /bin/bash

echo "Build Custom React Project"

init="npm init"

installDependencies="yarn add react@^16.13.1 react-dom@^16.13.1 cross-env"
installDevDependencies="yarn add webpack@^4.43.0 webpack-cli@^3.3.11 webpack-dev-server@^3.11.0 html-webpack-plugin@^4.3.0 terser-webpack-plugin@^3.0.0 --dev"
installBabelDependencies="yarn add @babel/core@^7.9.6 @babel/preset-env@^7.9.6 @babel/preset-react@^7.9.4 babel-loader@^8.1.0 babel-plugin-module-resolver@^4.0.0 --dev"
installEslintDependencies="yarn add eslint eslint-config-airbnb eslint-import-resolver-babel-module eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier --dev"

copyBabelrc="cp `dirname "$0"`/.babelrc `pwd`/.babelrc"
copyEslintrc="cp `dirname "$0"`/.eslintrc.json `pwd`/.eslintrc.json"
copyPrettierrc="cp `dirname "$0"`/.prettierrc `pwd`/.prettierrc"
copyGitignore="cp `dirname "$0"`/.gitignore `pwd`/.gitignore"
copyWebpackConfig="cp `dirname "$0"`/webpack.config.js `pwd`/webpack.config.js"

makeSrcDir="mkdir `pwd`/src"

makeApp="touch `pwd`/src/App.jsx"
makeIndex="touch `pwd`/src/index.jsx"

makeAppTS="touch `pwd`/src/App.tsx"
makeIndexTS="touch `pwd`/src/index.tsx"

makeHTML="touch `pwd`/src/index.html"

copyApp="cp -r `dirname "$0"`/src/js/App.jsx `pwd`/src/App.jsx"
copyIndex="cp -r `dirname "$0"`/src/js/index.jsx `pwd`/src/App.jsx"

copyIndexHtml="cp -r `dirname "$0"`/src/index.html `pwd`/src/index.html"

installTypescript="yarn add typescript@^3.8.3 @babel/preset-typescript@^7.10.4 @typescript-eslint/eslint-plugin @typescript-eslint/parser @types/react@^16.9.34 @types/react-dom@^16.9.7 --dev"
copyTSconfig="cp `dirname "$0"`/tsconfig.json `pwd`/tsconfig.json"
copyWebpackConfig="cp `dirname "$0"`/webpack-ts.config.js `pwd`/webpack.config.js"
copyAppTS="cp -r `dirname "$0"`/src/ts/App.tsx `pwd`/src/App.tsx"
copyIndexTS="cp -r `dirname "$0"`/src/ts/index.tsx `pwd`/src/index.tsx"

$init

echo "Install dependecies modules"
$installDependencies
$installDevDependencies
$installBabelDependencies
$installEslintDependencies

echo "CP project files"
$copyBabelrc
$copyEslintrc
$copyPrettierrc
$copyGitignore
$copyWebpackConfig

if [ "$1" = "typescript" ]; then
  $installTypescript
  $copyTSconfig
fi


echo "CP src Directory"

$makeSrcDir
$makeHTML
$copyIndexHtml

if [ "$1" = "typescript" ]; then
  $makeAppTS
  $makeIndexTS
  $copyAppTS
  $copyIndexTS
else
  $makeApp
  $makeIndex
  $copyApp
  $copyIndex
fi


exit
