import { Controller, Get } from '@nestjs/common';
import { NestPracticeService } from './nest-practice.service';

@Controller()
export class NestPracticeController {
  constructor(private readonly nestPracticeService: NestPracticeService) {}

  @Get()
  getHello(): string {
    return this.nestPracticeService.getHello();
  }
}
