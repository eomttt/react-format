#!/usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const shell = require('shelljs');
const { writeWebpack } = require('./writeWebpack.js');
const { writeBabelrc } = require('./writeBabelrc.js');
const { writeGitignore } = require('./writeGitignore.js');
const { writeEslintrc } = require('./writeEslintrc.js');
const { writePrettier } = require('./writePrettier.js');
const { writeTSConfig } = require('./writeTsConfig.js');

shell.echo('hello world');

program
  .arguments('<projectName>')
  .action((projectName) => {
    inquirered(projectName);
  })

program.parse(process.argv);

async function inquirered(projectName) {
  const { language } = await inquirer.prompt([{
    type: 'list',
    name: 'language',
    message: 'Set Language',
    choices: ['JavaScript', 'TypeScript'],
  }]);

  const { command } = await inquirer.prompt([{
    type: 'list',
    name: 'command',
    message: 'Set Language',
    choices: ['npm', 'yarn'],
  }]);

  const addCommand = command === 'npm' ? 'npm install' : 'yarn add';
  const isTypeScript = language === 'TypeScript';

  shell.exec(`mkdir ${projectName}`);
  shell.exec('npm init -y', { cwd: `./${projectName}` });
  shell.exec(`${addCommand} react react-dom cross-env`, { cwd: `./${projectName}` });
  shell.exec(`${addCommand} webpack webpack-cli webpack-dev-server html-webpack-plugin terser-webpack-plugin --dev`,  { cwd: `./${projectName}` });
  shell.exec(`${addCommand} @babel/core @babel/preset-env @babel/preset-react babel-loader babel-plugin-module-resolver --dev`,  { cwd: `./${projectName}` });
  shell.exec(`${addCommand} eslint eslint-config-airbnb eslint-import-resolver-babel-module eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react --dev`,  { cwd: `./${projectName}` });
  shell.exec(`${addCommand} prettier --dev`,  { cwd: `./${projectName}` });

  shell.exec('touch .gitignore', { cwd: `./${projectName}` });
  shell.exec('touch .babelrc', { cwd: `./${projectName}` });
  shell.exec('touch .eslintrc.json', { cwd: `./${projectName}` });
  shell.exec('touch .prettierrc', { cwd: `./${projectName}` });
  shell.exec('touch webpack.config.js', { cwd: `./${projectName}` });

  if (isTypeScript) {
    shell.exec(`${addCommand} typescript @babel/preset-typescript --dev`,  { cwd: `./${projectName}` });
    shell.exec(`${addCommand} @typescript-eslint/eslint-plugin @typescript-eslint/parser --dev`,  { cwd: `./${projectName}` });
    shell.exec('touch tsconfig.json', { cwd: `./${projectName}` });
    writeTSConfig(projectName);
  }

  writeGitignore(projectName);
  writeWebpack(projectName, isTypeScript);
  writeBabelrc(projectName, isTypeScript);
  writeEslintrc(projectName, isTypeScript);
  writePrettier(projectName);
}