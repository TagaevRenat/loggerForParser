import { Injectable } from '@nestjs/common';

@Injectable()
export class NestPracticeService {
  getHello(): string {
    return 'Hello World!';
  }
}
