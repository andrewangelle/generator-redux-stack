const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

beforeEach(() => {
  return helpers.run(path.join(__dirname, '../index.js'))
    .withPrompts({
      appName: 'skullin',
      appDescription: 'skullin hard'
    });
});

describe('generator-redux-stack', () => {
  it('generates babel config', () => {
    assert.file(['.babelrc']);
  });

  it('generates eslint config', () => {
    assert.file(['.eslintrc']);
  });

  it('generates jest config file', () => {
    assert.file(['.jestrc']);
  });

  it('generates gitignore file', () => {
    assert.file(['.gitignore']);
  });

  it('generates editorconfig file', () => {
    assert.file(['.editorconfig']);
  });

  it('generates webpack config', () => {
    assert.file(['webpack.config.js', 'webpack.config.production.js']);
  });

  it('generates package.json file', () => {
    assert.fileContent('package.json', /"name": "skullin"/);
    assert.fileContent('package.json', /"description": "skullin hard"/);
  });

  it('generates front end config files', () => {
    assert.file(['src/config/routes.js']);
  });

  it('generates index file', () => {
    assert.file(['src/index.js']);
  });

  it('generates html file', () => {
    assert.file(['src/index.html']);
  });

  it('generates actions', () => {
    assert.file(['src/actions/counter.js']);
  });

  it('generates containers', () => {
    assert.file([
      'src/containers/AnotherPage.js',
      'src/containers/App.js',
      'src/containers/CounterPage.js',
      'src/containers/DevTools.js',
      'src/containers/NotFoundPage.js',
      'src/containers/Root.js',
    ]);
  });

  it('generates components', () => {
    assert.file([
      'src/components/Counter.js',
      'src/components/Header.js'
    ]);
  });

  it('generates reducers', () => {
    assert.file([
      'src/reducers/counter.js',
      'src/reducers/index.js'
    ]);
  });

  it('generates store', () => {
    assert.file([
      'src/store/configureStore.dev.js',
      'src/store/configureStore.js',
      'src/store/configureStore.prod.js'
    ]);
  });

  it('generates styles', () => {
    assert.file([
      'src/style/counter.scss',
      'src/style/index.scss'
    ]);
  });

  it('generates utils', () => {
    assert.file([
      'src/utils/wrapActionCreators.js'
    ]);
  });

  it('generates tests', () => {
    assert.file([
      'test/actions/counter.spec.js',
      'test/components/Counter.spec.js',
      'test/containers/CounterPage.spec.js',
      'test/reducers/counter.spec.js'
    ]);
  });
});
