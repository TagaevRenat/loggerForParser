import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbLibService } from './db-lib.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  providers: [DbLibService],
  exports: [DbLibService],
})
export class DbLibModule {}
