import * as chalk from 'chalk';

export const loggerStyles = {
  log: {
    typeOfLog: (typeOfLog) => chalk.bold.bgGreen(typeOfLog),
    message: (text) => chalk.green(text),
  },
  error: {
    typeOfLog: (typeOfLog) => chalk.bold.bgRed(typeOfLog),
    message: (text) => chalk.red(text),
  },
  warn: {
    typeOfLog: (typeOfLog) => chalk.bold.bgYellow(typeOfLog),
    message: (text) => chalk.yellow(text),
  },
  debug: {
    typeOfLog: (typeOfLog) => chalk.bold.bgCyan(typeOfLog),
    message: (text) => chalk.cyan(text),
  },
};
