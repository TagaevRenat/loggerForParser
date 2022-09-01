import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbLibService } from './db-lib.service';
import { Log } from './entities/etity';

@Module({
  imports: [TypeOrmModule.forRoot()],
  providers: [DbLibService],
  exports: [DbLibService, Log],
})
export class DbLibModule {}
