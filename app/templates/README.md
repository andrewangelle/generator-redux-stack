# <%= appName %>

<%= appDescription %>

## Requirements

+ NodeJS

## Tech Stack

* [react 15](https://facebook.github.io/react/) - View layer
* [react-router 4](https://reacttraining.com/react-router/web/guides/quick-start) - Router
* [redux](https://github.com/reactjs/redux) - State management
* [sass](http://sass-lang.com/) - CSS preprocessor
* [react-css-modules](https://github.com/gajus/react-css-modules) - Scoped CSS modules
* [babel](https://babeljs.io/) - ES6/JSX compiler
* [webpack 2](https://webpack.github.io/) - Module bundler
* [jest](https://facebook.github.io/jest/) - Test suite

## Setup

Install dependencies:

```sh
$ npm install
```

Start the server at [http://localhost:3000](http://localhost:3000):

```sh
$ npm start
```

To run the server in release mode, set the environment variable `NODE_ENV=production`

## Test

Run tests:

```sh
$ npm test
```

Watch and re-run tests:

```sh
$ npm run test:watch
```

## Release

Generate a release build in `dist`:

```sh
$ npm run build
```
