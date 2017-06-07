var plugin = require('shelljs/plugin');
var clearModule = require('clear');

function clear() {
  clearModule();
  return {
    inspect: function () {
      return '';
    },
  };
}

plugin.register('clear', clear, {
  allowGlobbing: false,
  wrapOutput: false,
});

exports.clear = clear;
