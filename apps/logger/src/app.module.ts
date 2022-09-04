import { Module } from '@nestjs/common';
import { DbLibModule } from 'libs/db-lib/src';
import { TmdbParserModule } from './tmdb_parser/tmdb_parser.module';

@Module({
  imports: [TmdbParserModule, DbLibModule],
})
export class AppModule {}
