const VERSION = {
  ['1.0.0']: {
    'react': '@^17.0.1',
    'react-dom': '@^17.0.1',
    'cross-env': '@^7.0.3',
    'webpack': '@^5.24.4',
    'webpack-cli': '@^4.5.0',
    'webpack-dev-server': '@^3.11.2',
    'html-webpack-plugin': '@^5.3.1',
    'terser-webpack-plugin': '@^5.1.1',
    '@babel/core': '@^7.13.10',
    '@babel/preset-env': '@^7.13.10',
    '@babel/preset-react': '@^7.12.13',
    'babel-loader': '@^8.2.2',
    'babel-plugin-module-resolver': '@^4.1.0',
    'eslint': '@^7.21.0',
    'eslint-config-airbnb': '@^18.2.1',
    'eslint-plugin-jsx-a11y': '@^6.4.1',
    'eslint-plugin-import': '@^2.22.1',
    'eslint-import-resolver-babel-module': '@^5.2.0',
    'eslint-plugin-prettier': '@^3.3.1',
    'eslint-plugin-react': '@^7.22.0',
    '@typescript-eslint/eslint-plugin': '@^4.17.0',
    '@typescript-eslint/parser': '@^4.17.0',
    'prettier': '@^2.2.1',
    'eslint-config-prettier': '@^8.1.0',
    'typescript': '@^4.2.3',
    '@babel/preset-typescript': '@^7.13.0',
    '@types/react': '@^17.0.3',
    '@types/react-dom': '@^17.0.2',
  },
  ['1.0.1']: {
    'react': '@^17.0.1',
    'react-dom': '@^17.0.1',
    'cross-env': '@^7.0.3',
    'webpack': '@^5.24.4',
    'webpack-cli': '@^4.5.0',
    'webpack-dev-server': '@^3.11.2',
    'html-webpack-plugin': '@^5.3.1',
    'terser-webpack-plugin': '@^5.1.1',
    '@babel/runtime': '@^7.14.0',
    '@babel/core': '@^7.13.10',
    '@babel/preset-env': '@^7.13.10',
    '@babel/preset-react': '@^7.12.13',
    '@babel/plugin-transform-runtime': '@^7.14.3',
    'babel-loader': '@^8.2.2',
    'babel-plugin-module-resolver': '@^4.1.0',
    'eslint': '@^7.21.0',
    'eslint-config-airbnb': '@^18.2.1',
    'eslint-plugin-jsx-a11y': '@^6.4.1',
    'eslint-plugin-import': '@^2.22.1',
    'eslint-import-resolver-babel-module': '@^5.2.0',
    'eslint-plugin-prettier': '@^3.3.1',
    'eslint-plugin-react': '@^7.22.0',
    '@typescript-eslint/eslint-plugin': '@^4.17.0',
    '@typescript-eslint/parser': '@^4.17.0',
    'prettier': '@^2.2.1',
    'eslint-config-prettier': '@^8.1.0',
    'typescript': '@^4.2.3',
    '@babel/preset-typescript': '@^7.13.0',
    '@types/react': '@^17.0.3',
    '@types/react-dom': '@^17.0.2',
  },
  ['1.0.2']: {
    'react': '@^17.0.2',
    'react-dom': '@^17.0.2',
    'cross-env': '@^7.0.3',
    'webpack': '@^5.52.0',
    'webpack-cli': '@^4.8.0',
    'webpack-dev-server': '@^4.1.0',
    'html-webpack-plugin': '@^5.3.2',
    'terser-webpack-plugin': '@^5.2.3',
    '@babel/runtime': '@^7.15.4',
    '@babel/core': '@^7.15.5',
    '@babel/preset-env': '@^7.15.4',
    '@babel/preset-react': '@^7.14.5',
    '@babel/plugin-transform-runtime': '@^7.15.0',
    'babel-loader': '@^8.2.2',
    'babel-plugin-module-resolver': '@^4.1.0',
    'eslint': '@^7.32.0',
    'eslint-config-airbnb': '@^18.2.1',
    'eslint-plugin-jsx-a11y': '@^6.4.1',
    'eslint-plugin-import': '@^2.24.2',
    'eslint-import-resolver-babel-module': '@^5.3.1',
    'eslint-plugin-prettier': '@^4.0.0',
    'eslint-plugin-react': '@^7.25.1',
    '@typescript-eslint/eslint-plugin': '@^4.31.0',
    '@typescript-eslint/parser': '@^4.31.0',
    'prettier': '@^2.3.2',
    'eslint-config-prettier': '@^8.3.0',
    'typescript': '@^4.4.2',
    '@babel/preset-typescript': '@^7.15.0',
    '@types/react': '@^17.0.20',
    '@types/react-dom': '@^17.0.9',
  }
}

module.exports.getInstallModules = function(version, isTypeScript) {
  const obj = VERSION[version];
  if (obj) {
    return Object.keys(obj).reduce((acc, cur) => {
      if (cur === 'react' || cur === 'react-dom' || cur === '@babel/runtime') {
        return {
          ...acc,
          install: `${acc.install} ${cur}${obj[cur]}`
        }
      }
      if (!isTypeScript) {
        if (
          cur === 'typescript' ||
          cur === '@babel/preset-typescript' ||
          cur === '@typescript-eslint/eslint-plugin' ||
          cur === '@typescript-eslint/parser' ||
          cur === '@types/react' ||
          cur === '@types/react-dom'
        ) {
            return { ...acc }
          }
      } 
      return {
        ...acc,
        installDev: `${acc.installDev} ${cur}${obj[cur]}`
      }
    }, {
      install: '',
      installDev: '',
    });
  }
}

module.exports.VERSION = VERSION;