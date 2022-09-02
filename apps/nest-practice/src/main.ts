import { NestFactory } from '@nestjs/core';
import { NestPracticeModule } from './nest-practice.module';

async function bootstrap() {
  const app = await NestFactory.create(NestPracticeModule);
  await app.listen(3000);
}
bootstrap();
