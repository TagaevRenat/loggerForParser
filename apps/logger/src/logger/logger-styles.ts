import {
  bold,
  bgGreen,
  bgRed,
  bgYellow,
  bgCyan,
  red,
  green,
  yellow,
  cyan,
} from 'chalk';

export const loggerStyles = {
  log: {
    typeOfLog: (typeOfLog) => bold.bgGreen(typeOfLog),
    message: (text) => green(text),
  },
  error: {
    typeOfLog: (typeOfLog) => bold.bgRed(typeOfLog),
    message: (text) => red(text),
  },
  warn: {
    typeOfLog: (typeOfLog) => bold.bgYellow(typeOfLog),
    message: (text) => yellow(text),
  },
  debug: {
    typeOfLog: (typeOfLog) => bold.bgCyan(typeOfLog),
    message: (text) => cyan(text),
  },
};
