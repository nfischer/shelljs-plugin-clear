var plugin = require('shelljs/plugin');
var util = require('util');
var clearModule = require('clear');

// Newer versions of node use a symbol called util.inspect.custom.
var inspectAttribute = util.inspect.custom || 'inspect';

function clear() {
  clearModule();
  var ret = {};
  ret[inspectAttribute] = function () {
    return '';
  };
  return ret;
}

plugin.register('clear', clear, {
  allowGlobbing: false,
  wrapOutput: false,
});

exports.clear = clear;
