import { Module } from '@nestjs/common';
import { DbLibModule } from 'libs/db-lib/src/db-lib.module';
import { MyLogger } from './logger.service';

@Module({
  providers: [MyLogger],
  exports: [MyLogger],
  imports: [DbLibModule],
})
export class LoggerModule {}
