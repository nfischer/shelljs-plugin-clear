# shelljs-plugin-clear

[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/nfischer/shelljs-plugin-clear/main.yml?style=flat-square&logo=github)](https://github.com/nfischer/shelljs-plugin-clear/actions/workflows/main.yml)
[![npm](https://img.shields.io/npm/v/shelljs-plugin-clear.svg?style=flat-square)](https://www.npmjs.com/package/shelljs-plugin-clear)
[![shelljs-plugin](https://img.shields.io/badge/shelljs-plugin-brightgreen.svg?style=flat-square)](https://github.com/shelljs/shelljs/wiki/Using-ShellJS-Plugins)

A [ShellJS](https://github.com/shelljs/shelljs) plugin for the `clear()` command
for REPL use.

## Installation

```bash
$ npm install --save shelljs
$ npm install --save shelljs-plugin-clear
```

## Usage

To use this plugin in your REPL, include it like so:

```
> require('shelljs-plugin-clear');
> var shell = require('shelljs');
> shell.clear();
```

## Writing plugins

If you're interested in taking a look at the current state of the plugin API,
take a look at [index.js](index.js). This has helpful comments explaining the
necessary boilerplate for writing a plugin. For an example usage of the plugin,
take a look at [test/test.js](test/test.js).
