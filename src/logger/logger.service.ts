import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class MyLogger extends ConsoleLogger {
  log(message: any, ...optionalParams: any[]) {
    console.log('Выводим логи - ' + message);
  }

  error(message: any, ...optionalParams: any[]) {
    console.log(message);
  }

  warn(message: any, ...optionalParams: any[]) {
    console.log('warn');
  }

  debug(message: any, ...optionalParams: any[]) {}

  verbose(message: any, ...optionalParams: any[]) {}

  setContext(context: string) {
    console.log(context);
  }
}
