var plugin = require('shelljs/plugin');
var clear = require('clear');

plugin.register('clear', clear, {
  allowGlobbing: false,
  wrapOutput: false,
});

exports.clear = clear;
