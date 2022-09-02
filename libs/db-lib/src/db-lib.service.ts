import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Logs } from './entities/etity';

@Injectable()
export class DbLibService {
  constructor(private dataSource: DataSource) {}
  public async getAllLogs(): Promise<any> {
    try {
      const allLogs = await this.dataSource
        .createQueryBuilder()
        .select('*')
        .from(Logs, 'log');

      return allLogs;
    } catch (e) {
      throw new Error(e);
    }
  }
}
