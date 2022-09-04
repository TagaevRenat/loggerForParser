import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbLibService } from './db-lib.service';
import { Logs } from './entities/etity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'projects',
      entities: [Logs],
      synchronize: false,
      autoLoadEntities: true,
    }),
  ],
  providers: [DbLibService],
  exports: [DbLibService],
})
export class DbLibModule {}
