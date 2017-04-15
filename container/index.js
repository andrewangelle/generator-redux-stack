const yeoman = require('yeoman-generator');
const _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  init: function() {
    var cb = this.async();

    this.prompt([
      {
        name: 'name',
        message: 'Container name',
        required: true
      }
    ],
    props => {
      this.name = props.name;
      this.template('Container.js', `src/containers/${this.name}.js`);
      this.template('Container.spec.js', `test/containers/${this.name}.spec.js`);

      cb();
    });
  }
});
