import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';
import * as chalk from 'chalk';
import * as util from 'node:util';
import { loggerEnum } from './logger.enum';

@Injectable()
export class MyLogger extends ConsoleLogger {
  private console = console.log;

  private pushLogIntoConsole(typeOfLog, context, message?, variable?) {
    const time: string = new Date().toLocaleString();
    if (!context) {
      context = 'global';
    }
    switch (typeOfLog) {
      case 'LOG':
        this.console(
          `[${chalk.bold(time)}], ${chalk.bold.bgGreen('LOG')} - ${chalk.green(
            message,
          )}, Variable - ${chalk.underline(
            variable ? util.inspect(variable) : 'no variable send',
          )}, ${'context' + ' - ' + chalk.underline(context)}`,
        );
        break;

      case 'ERROR':
        this.console(
          `[${chalk.bold(time)}], ${chalk.bold.bgRed('ERROR')} - ${chalk.red(
            message,
          )}, Variable - ${chalk.underline(
            variable ? util.inspect(variable) : 'no variable send',
          )}, ${'context' + ' - ' + chalk.underline(context)}`,
        );
        console.trace();
        break;

      case 'WARN':
        this.console(
          `[${chalk.bold(time)}], ${chalk.bold.bgYellow(
            'WARN',
          )} - ${chalk.yellow(message)}, Variable - ${chalk.underline(
            variable
              ? util.inspect(variable, { colors: true })
              : 'no variable send',
          )}, ${'context' + ' - ' + chalk.underline(context)}`,
        );
        console.trace();
        break;

      case 'DEBUG':
        this.console(
          `[${chalk.bold(time)}], ${chalk.bold.bgCyan('DEBUG')} -  `,
        );
        console.trace();
        break;
    }
  }

  public log(
    message: string,
    variable?: string | Array<any> | Record<any, any>,
  ): void {
    let context: string = this.context;
    this.pushLogIntoConsole(loggerEnum.log, context, message, variable);
  }

  public error(
    error: any,
    variable?: string | Array<any> | Record<any, any>,
  ): void {
    let context: string = this.context;
    this.pushLogIntoConsole(loggerEnum.error, context, error.message, variable);
  }

  public warn(
    message: string,
    variable?: string | Array<any> | Record<any, any>,
  ): void {
    let context: string = this.context;
    this.pushLogIntoConsole(loggerEnum.warn, context, message, variable);
  }

  public debug(error: any): void {
    let context: string = this.context;
    this.pushLogIntoConsole(loggerEnum.debug, context);
  }
}
