import { Module } from '@nestjs/common';
import { LoggerModule } from './logger/logger.module';
import { TmdbParserModule } from './tmdb_parser/tmdb_parser.module';

@Module({
  imports: [TmdbParserModule, LoggerModule],
})
export class AppModule {}
