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
const { writeIndexHtml } = require('./writeIndexHtml.js');
const { writeIndex } = require('./writeIndex.js');
const { writeApp } = require('./writeApp.js');
const { updatePackageScript } = require('./updatePackage.js');
const { getInstallModules, VERSION } = require('./version.js');

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
    message: 'Set Command',
    choices: ['npm', 'yarn'],
  }]);

  const { version } = await inquirer.prompt([{
    type: 'list',
    name: 'version',
    message: 'Select Version',
    choices: Object.keys(VERSION),
  }]);

  const addCommand = command === 'npm' ? 'npm install' : 'yarn add';
  const isTypeScript = language === 'TypeScript';

  const { install, installDev } = getInstallModules(version, isTypeScript);
  shell.exec(`mkdir ${projectName}`);
  shell.exec(`mkdir ./${projectName}/src`);
  shell.exec('npm init -y', { cwd: `./${projectName}` });

  shell.exec(`${addCommand} ${install}`, { cwd: `./${projectName}` });
  shell.exec(`${addCommand} ${installDev} --dev`, { cwd: `./${projectName}` });

  writeIndexHtml(projectName);
  writeIndex(projectName, isTypeScript);
  writeApp(projectName, isTypeScript);

  if (isTypeScript) {
    writeTSConfig(projectName);
  }

  writeGitignore(projectName);
  writeWebpack(projectName, isTypeScript, version);
  writeBabelrc(projectName, isTypeScript);
  writeEslintrc(projectName, isTypeScript);
  writePrettier(projectName);
  updatePackageScript(projectName);
}