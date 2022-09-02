import { Module } from '@nestjs/common';
import { DbLibModule } from 'libs/db-lib/src';
import { TmdbParserModule } from './tmdb_parser/tmdb_parser.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TmdbParserModule, DbLibModule, ConfigModule.forRoot()],
})
export class AppModule {}
