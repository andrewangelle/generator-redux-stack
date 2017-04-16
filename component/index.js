const yeoman = require('yeoman-generator');
const _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  init: function() {
    var cb = this.async();

    this.prompt([
      {
        name: 'name',
        message: 'Component name',
        required: true
      }
    ],
    props => {
      this.name = props.name;
      this.template('Component.js', `src/components/${this.name}.js`);
      this.template('Component.spec.js', `test/components/${this.name}.spec.js`);

      cb();
    });
  }
});
