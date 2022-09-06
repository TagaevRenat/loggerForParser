import { Module } from '@nestjs/common';
import { DbLibModule } from '@app/db-lib/index';
import { TmdbParserModule } from './tmdb_parser/tmdb_parser.module';

@Module({
  imports: [TmdbParserModule, DbLibModule],
})
export class AppModule {}
