const yeoman = require('yeoman-generator');
const _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  init: function() {
    var cb = this.async();

    this.prompt([
      {
        name: 'name',
        message: 'Actions name',
        required: true
      }
    ],
    props => {
      this.name = props.name;
      this.template('actions.js', `src/actions/${this.name}.js`);
      this.template('actions.spec.js', `test/actions/${this.name}.spec.js`);
      this.template('reducer.js', `src/reducers/${this.name}.js`);
      this.template('reducer.spec.js', `test/reducers/${this.name}.spec.js`);

      cb();
    });
  }
});
