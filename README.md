# shelljs-plugin-clear

[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fnfischer%2Fshelljs-plugin-clear%2Fbadge%3Fref%3Dmain&style=flat-square)](https://actions-badge.atrox.dev/nfischer/shelljs-plugin-clear/goto?ref=main)
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
