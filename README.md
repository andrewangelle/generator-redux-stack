# generator-redux-stack

A react/redux generator with all the build tooling goodies.

[![Circle CI](https://circleci.com/gh/zakangelle/generator-redux-stack/tree/master.svg?style=shield)](https://circleci.com/gh/zakangelle/generator-redux-stack/tree/master)

<img src='https://dl.dropboxusercontent.com/s/4w9bsn1ti8zbz7b/octo.png' width='400px'>

## Requirements

+ NodeJS
+ Yeoman

## Tech Stack

* [react (v15)](https://facebook.github.io/react/) - View layer
* [react-router (v4)](https://reacttraining.com/react-router/web/guides/quick-start) - Router
* [redux](https://github.com/reactjs/redux) - State management
* [redux-thunk](https://github.com/gaearon/redux-thunk) - Async actions
* [sass](http://sass-lang.com/) - CSS preprocessor
* [react-css-modules](https://github.com/gajus/react-css-modules) - Scoped CSS modules
* [babel](https://babeljs.io/) - ES6/JSX compiler
* [webpack (v2)](https://webpack.github.io/) - Module bundler
* [jest](https://facebook.github.io/jest/) - Test suite

## Dev Tooling

* Hot module replacement
* Redux time travel (using [redux-devtools](https://github.com/gaearon/redux-devtools))
* Redux devtools monitors ([log](https://github.com/gaearon/redux-devtools-log-monitor), [diff](https://github.com/whetstone/redux-devtools-diff-monitor), [slider](https://github.com/calesce/redux-slider-monitor), [import/export](https://github.com/lapanoid/redux-import-export-monitor))
* Redux action log (using [redux-logger](https://github.com/evgenyrodionov/redux-logger))

## Setup

Install it globally:

```sh
$ npm install -g generator-redux-stack
```

## Usage

Make a folder for your app:

```sh
$ mkdir app-name && cd app-name
```

Generate the app scaffolding:

```sh
$ yo redux-stack
```

Boot up the app:

```sh
$ npm start
```

## Module Generators

Generate a new container:

```sh
$ yo redux-stack:container
```

Generate a new component:

```sh
$ yo redux-stack:component
```

Generate a new set of actions with corresponding reducer:

```sh
$ yo redux-stack:actions
```

## License

MIT
