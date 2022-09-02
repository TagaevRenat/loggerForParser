import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';
import { bold, underline } from 'chalk';
import * as util from 'node:util';
import { loggerTypes } from './logger-types.enum';
import { loggerStyles } from './logger-styles';
import { Logs } from 'libs/db-lib/src/entities/etity';

@Injectable()
export class MyLogger extends ConsoleLogger {
  private console = console.log;
  //Типы логов
  public log(
    message: string,
    variable?: string | Array<any> | Record<any, any>,
  ): void {
    let context: string = this.context;
    this.outputConstructor(loggerTypes.log, context, message, variable);
  }

  public error(
    error: any,
    variable?: string | Array<any> | Record<any, any>,
  ): void {
    let context: string = this.context;
    this.outputConstructor(loggerTypes.error, context, error.message, variable);
  }

  public warn(
    message: string,
    variable?: string | Array<any> | Record<any, any>,
  ): void {
    let context: string = this.context;
    this.outputConstructor(loggerTypes.warn, context, message, variable);
  }

  public debug(error: any): void {
    let context: string = this.context;
    this.outputConstructor(loggerTypes.debug, context);
  }

  //Конструктор выводов в консоль
  private async outputConstructor(
    typeOfLog,
    context?,
    message?,
    variable?,
  ): Promise<void> {
    const time: string = new Date().toLocaleString();
    if (!context) {
      context = 'global';
    }
    const fromatedMessage = `[${bold(time)}], ${this.setColor(typeOfLog)} - ${
      message ? this.setColor(typeOfLog, message) : 'no message'
    }, Variable - ${underline(
      variable ? util.inspect(variable) : 'no variable send',
    )}, ${'context' + ' - ' + underline(context)}`;
    this.console(fromatedMessage);
    typeOfLog !== loggerTypes.log ? console.trace() : null;
    try {
      const insert = await Logs.createNewRecord(typeOfLog, message, time);
      console.log(insert);
    } catch (error) {
      console.log(error);
    }
  }

  //Функция для определения цвета лога
  private setColor(typeOfLog: string, message?: string): any {
    if (typeOfLog && !message) {
      return loggerStyles[typeOfLog.toLocaleLowerCase()]['typeOfLog'](
        typeOfLog,
      );
    } else {
      return loggerStyles[typeOfLog.toLocaleLowerCase()]['message'](message);
    }
  }
}
