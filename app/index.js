const yeoman = require('yeoman-generator');
const _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  init: function() {
    var cb = this.async();

    this.prompt([
      {
        name: 'appName',
        message: 'What\'s the name of your app?',
        default: this.appname.replace(/\s/g, '-'),
        filter: val => _s.slugify(val)
      },
      {
        name: 'appDescription',
        message: 'What\'s the app description?'
      }
    ],
    props => {
      this.appName = props.appName;
      this.appDescription = props.appDescription;

      this.template('editorconfig', '.editorconfig');
      this.template('gitignore', '.gitignore');
      this.template('eslintrc', '.eslintrc');
      this.template('babelrc', '.babelrc');
      this.template('jestrc', '.jestrc');
      this.template('webpack.config.js');
      this.template('webpack.config.production.js');
      this.template('_package.json', 'package.json');
      this.template('README.md');
      this.directory('build', 'build');
      this.directory('src', 'src');
      this.directory('test', 'test');

      cb();
    });
  },
  install: function() {
    this.installDependencies({ bower: false });
  }
});
