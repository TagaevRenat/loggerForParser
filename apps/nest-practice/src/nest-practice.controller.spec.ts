import { Test, TestingModule } from '@nestjs/testing';
import { NestPracticeController } from './nest-practice.controller';
import { NestPracticeService } from './nest-practice.service';

describe('NestPracticeController', () => {
  let nestPracticeController: NestPracticeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestPracticeController],
      providers: [NestPracticeService],
    }).compile();

    nestPracticeController = app.get<NestPracticeController>(NestPracticeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestPracticeController.getHello()).toBe('Hello World!');
    });
  });
});
