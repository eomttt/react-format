# Custom React project format

### [Version](https://github.com/eomttt/react-format/blob/master/VERSION.md)

### Basic modules
> $ yarn add react react-dom

> $ yarn add cross-env

> $ yarn add webpack webpack-cli webpack-dev-server --dev

> $ yarn add html-webpack-plugin terser-webpack-plugin --dev

> $ yarn add @babel/core @babel/preset-env @babel/preset-react --dev

> $ yarn add babel-loader babel-plugin-module-resolver --dev

> $ yarn add eslint eslint-config-airbnb eslint-import-resolver-babel-module eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react --dev

> $ yarn add prettier --dev


### Basic files
> $ vi .gitignore

> $ vi .babelrc

> $ vi .eslintrc.json

> $ vi .prettierrc

> $ vi webpack.config.js

### For Typescript
> $ yarn add typescript @babel/preset-typescript --dev

> $ yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser --dev

### Typescript file
> $ vi tsconfig.json

### pacakge.json scripts 는 프로젝트 내 scripts를 참조해주세요.
webpack build, webpack watch 등
```js
  "scripts": {
    "dev": "NODE_ENV=development webpack serve --mode development --open",
    "build": "cross-env NODE_ENV=production webpack --mode production"
  },
```
