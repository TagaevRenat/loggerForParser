import { Module } from '@nestjs/common';
import { LoggerModule } from './../logger/logger.module';
import { ParserService } from './parser.service';

@Module({
  controllers: [],
  providers: [ParserService],
  exports: [ParserService],
  imports: [LoggerModule],
})
export class TmdbParserModule {}
