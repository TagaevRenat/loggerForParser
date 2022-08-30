import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class MyLogger extends ConsoleLogger {
  log(message: any, ...optionalParams: any[]) {
    let time: string = new Date().toLocaleString();
    let context = this.context;
    const log = console.log;
    if (!context) {
      context = 'global';
    }
    console.log(`LOG - ${message}, Time -  ${time}, context - ${context}`);
  }

  // error(message: any, ...optionalParams: any[]) {
  //   console.log('Блять, ошибка!' + message);
  // }

  // warn(message: any, ...optionalParams: any[]) {
  //   console.log('warn');
  // }

  // debug(message: any, ...optionalParams: any[]) {}

  // verbose(message: any, ...optionalParams: any[]) {}

  // setInfo(typeofInfo: string, message: string, context?: string) {
  //   if (message) {
  //     console.log(`${typeofInfo} - ${message}, context - ${this.context}`);
  //   }
  // }
}
