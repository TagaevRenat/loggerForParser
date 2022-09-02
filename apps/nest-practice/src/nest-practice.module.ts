import { Module } from '@nestjs/common';
import { NestPracticeController } from './nest-practice.controller';
import { NestPracticeService } from './nest-practice.service';

@Module({
  imports: [],
  controllers: [NestPracticeController],
  providers: [NestPracticeService],
})
export class NestPracticeModule {}
