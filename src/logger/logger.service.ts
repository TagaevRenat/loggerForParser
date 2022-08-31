import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';
const chalk = require('chalk');

@Injectable({ scope: Scope.TRANSIENT })
export class MyLogger extends ConsoleLogger {
  static object: string;
  static log = console.log;

  checkVariable(variable: string | Array<any> | {}) {
    if (typeof variable === 'object' && !Array.isArray(variable)) {
      MyLogger.object = JSON.stringify(variable);
      return MyLogger.object;
    }
    return variable;
  }

  log(message: string, variable?: string | Array<any> | {}): void {
    let context: string = this.context;
    const time: string = new Date().toLocaleString();
    if (!context) {
      context = 'global';
    }
    MyLogger.log(
      `[${chalk.bold(time)}], ${chalk.bold.bgGreen('LOG')} - ${chalk.green(
        message,
      )}, Variable - ${chalk.underline(
        variable ? this.checkVariable(variable) : 'no variable send',
      )}, ${'context' + ' - ' + chalk.underline(context)}`,
    );
  }

  error(error: any, variable?: string | Array<any> | {}): void {
    let time: string = new Date().toLocaleString();
    let context: string = this.context;
    if (!context) {
      context = 'global';
    }
    MyLogger.log(
      `[${chalk.bold(time)}], ${chalk.bold.bgRed('ERROR')} - ${chalk.red(
        error.message,
      )}, Variable - ${chalk.underline(
        variable ? this.checkVariable(variable) : 'no variable send',
      )}, ${'context' + ' - ' + chalk.underline(context)}`,
    );
  }

  warn(message: string, variable?: string | Array<any> | {}): void {
    let time: string = new Date().toLocaleString();
    let context: string = this.context;
    if (!context) {
      context = 'global';
    }
    MyLogger.log(
      `[${chalk.bold(time)}], ${chalk.bold.bgYellow('LOG')} - ${chalk.yellow(
        message,
      )}, Variable - ${chalk.underline(
        variable ? this.checkVariable(variable) : 'no variable send',
      )}, ${'context' + ' - ' + chalk.underline(context)}`,
    );
  }

  debug(error: any): void {
    let time: string = new Date().toLocaleString();
    let context: string = this.context;
    if (!context) {
      context = 'global';
    }
    MyLogger.log(`[${chalk.bold(time)}], ${chalk.bold.bgCyan('DEBUG')} -  `);
    console.trace();
  }
}
