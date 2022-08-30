import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';
const chalk = require('chalk');

@Injectable({ scope: Scope.TRANSIENT })
export class MyLogger extends ConsoleLogger {
  log(message: string, variable?: string | Array<any> | {}): void {
    let time: string = new Date().toLocaleString();
    let context: string = this.context;
    let object: string;
    const log = console.log;
    if (!context) {
      context = 'global';
    }
    if (typeof variable === 'object' && !Array.isArray(variable)) {
      object = JSON.stringify(variable);
    }
    log(
      `[${chalk.bold(time)}], ${chalk.bold.bgGreen('LOG')} - ${chalk.green(
        message,
      )}, Variable - ${chalk.underline(object ? object : variable)}, ${
        'context' + ' - ' + chalk.underline(context)
      }`,
    );
  }

  error(error: any, variable?: string | Array<any> | {}): void {
    let time: string = new Date().toLocaleString();
    let context: string = this.context;
    let object: string;
    const log = console.log;
    if (!context) {
      context = 'global';
    }
    if (typeof variable === 'object' && !Array.isArray(variable)) {
      object = JSON.stringify(variable);
    }
    log(
      `[${chalk.bold(time)}], ${chalk.bold.bgRed('ERROR')} - ${chalk.red(
        error.message,
      )}, Variable - ${chalk.underline(object ? object : variable)}, ${
        'context' + ' - ' + chalk.underline(context)
      }`,
    );
  }

  warn(message: any, variable?: string | Array<any> | {}): void {
    let time: string = new Date().toLocaleString();
    let context: string = this.context;
    let object: string;
    const log = console.log;
    if (!context) {
      context = 'global';
    }
    if (typeof variable === 'object' && !Array.isArray(variable)) {
      object = JSON.stringify(variable);
    }
    log(
      `[${chalk.bold(time)}], ${chalk.bold.bgYellow('LOG')} - ${chalk.yellow(
        message,
      )}, Variable - ${object ? object : variable}, ${
        'context' + ' - ' + chalk.underline(context)
      }`,
    );
  }

  debug(error: any): void {
    let time: string = new Date().toLocaleString();
    let context: string = this.context;
    const log = console.log;
    if (!context) {
      context = 'global';
    }
    log(`[${chalk.bold(time)}], ${chalk.bold.bgCyan('DEBUG')} -  `);
    console.trace();
  }
}
