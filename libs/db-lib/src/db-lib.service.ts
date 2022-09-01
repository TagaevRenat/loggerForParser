import { Injectable } from '@nestjs/common';
import { createQueryBuilder } from 'typeorm';
import { Log } from './entities/etity';

@Injectable()
export class DbLibService {
  public async getAllLogs(): Promise<any> {
    try {
      const allLogs = await createQueryBuilder().select('*').from(Log, 'log');

      return allLogs;
    } catch (e) {
      throw new Error(e);
    }
  }
}
