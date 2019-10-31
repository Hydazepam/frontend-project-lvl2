#!/usr/bin/env node

const program = require('commander');

program
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'Output format')
  .action((firstConfig, secondConfig) => {
    console.log(`${firstConfig} ${secondConfig}`);
  });

program.parse(process.argv);
