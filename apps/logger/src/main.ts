import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './logger/logger.service';
import { ParserService } from './tmdb_parser/parser.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  const service = await app.get(ParserService);
  const request = service.getFilmInfo();
  app.useLogger(new MyLogger());
  await app.listen(3000);
}
bootstrap();
