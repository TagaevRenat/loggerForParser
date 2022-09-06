import { Module } from '@nestjs/common';
import { DbLibsService } from './db-libs.service';

@Module({
  providers: [DbLibsService],
  exports: [DbLibsService],
})
export class DbLibsModule {}
