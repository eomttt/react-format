#! /bin/bash

echo "Build Custom React Project"

installDependencies="yarn add react react-dom cross-env"
installDevDependencies="yarn add webpack webpack-cli webpack-dev-server html-webpack-plugin terser-webpack-plugin --dev"
installBabelDependencies="yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader babel-plugin-module-resolver --dev"
installEslintDependencies="yarn add eslint eslint-config-airbnb eslint-import-resolver-babel-module eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier --dev"

copyBabelrc="cp `dirname "$0"`/.babelrc `pwd`/.babelrc"
copyEslintrc="cp `dirname "$0"`/.eslintrc.json `pwd`/.eslintrc.json"
copyPrettierrc="cp `dirname "$0"`/.prettierrc `pwd`/.prettierrc"
copyGitignore="cp `dirname "$0"`/.gitignore `pwd`/.gitignore"
copyWebpackConfig="cp `dirname "$0"`/webpack.config.js `pwd`/webpack.config.js"

copySrcDir="cp -r `dirname "$0"`/src `pwd`/src"

installTypescript="yarn add typescript ts-loader @typescript-eslint/eslint-plugin @typescript-eslint/parser --dev"
copyTsconfig="cp `dirname "$0"`/tsconfig.json `pwd`/tsconfig.json"

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
  $copyTsconfig
fi

echo "CP src Directory"
$copySrcDir

exit
