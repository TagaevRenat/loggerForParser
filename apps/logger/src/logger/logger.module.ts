import { Module } from '@nestjs/common';
import { DbLibModule } from '@app/db-lib/db-lib.module';
import { MyLogger } from './logger.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [MyLogger],
  exports: [MyLogger],
  imports: [DbLibModule, ConfigModule.forRoot({})],
})
export class LoggerModule {}
