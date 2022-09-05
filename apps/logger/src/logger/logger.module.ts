import { Module } from '@nestjs/common';
import { DbLibModule } from 'libs/db-lib/src/db-lib.module';
import { MyLogger } from './logger.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [MyLogger],
  exports: [MyLogger],
  imports: [DbLibModule, ConfigModule.forRoot({})],
})
export class LoggerModule {}
