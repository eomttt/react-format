const fs = require('fs');

const getEslintrc = (isTypeSciprt) => `

{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "airbnb",
    "prettier"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  ${isTypeSciprt ? '"parser": "@typescript-eslint/parser",' : ''}
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ${isTypeSciprt ? `[
    "react",
    "prettier",
    "@typescript-eslint"
  ]` : `[
    "react",
    "prettier",
  ]`},
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": ${isTypeSciprt ? `[".js", ".jsx", ".ts", ".tsx"]` : `[".js", ".jsx"]`},
        "paths": ["src"]
      }
    }
  },
  "rules": {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [1, {
      ${isTypeSciprt ? `"extensions": ["jsx", "tsx"]` : `"extensions": ["jsx"]`}
    }],
    "import/extensions": ["error", "ignorePackages", {
      "js": "never",
      "jsx": "never",
      "ts": "never",
      "tsx": "never"
    }],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "arrow-parens": "off"
  }
}

`;

module.exports.writeEslintrc = function (projectName, isTypeSciprt) {
  fs.writeFileSync(`./${projectName}/.eslintrc.json`, getEslintrc(isTypeSciprt), 'utf8');
}
