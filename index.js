#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).argv;

void async function main(argv) {
    setInterval(() => {
        if (argv._ && argv._[0]) {
            console.log(argv._[0]);
        } else {
            console.log('y');
        }
    }, 1);
}(argv);

