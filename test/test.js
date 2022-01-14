/* globals describe, it */

var pluginClear = require('..');
// If we were using additional plugins, we could load them here

var shell = require('shelljs');
var util = require('util');

require('should');

// override console.error() to cover up common.error() calls
console.error = function () { };

describe('plugin-clear', function () {
  it('does get added to the shelljs instance', function () {
    shell.should.have.property('clear');
  });

  it('does not interfere with existing commands', function () {
    /*
     * Plugins shouldn't interfere with existing commands
     */
    shell.cp.should.be.type('function');
    shell.mv.should.be.type('function');
    shell.ls().should.have.property('toEnd');
    shell.ls().should.have.property('grep');
    shell.ls().should.have.property('sed');
  });

  it('exports the plugin implementation', function () {
    /*
     * A plugin author can also export the implementation of their commands
     */
    pluginClear.should.be.type('object');
    pluginClear.clear.should.be.type('function');
  });

  it('has a silent return value', function () {
    var ret = shell.clear();
    util.inspect(ret).should.equal('');
  });

  it('does not get added as a method on ShellStrings', function () {
    /*
     * Plugins can be methods on ShellStrings
     */
    var ret = shell.ls();
    ret.should.not.have.property('clear');
  });
});
