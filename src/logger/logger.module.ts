import { Module } from '@nestjs/common';
import { MyLogger } from './logger.service';

@Module({
  controllers: [],
  providers: [MyLogger],
  exports: [MyLogger],
})
export class LoggerModule {}
