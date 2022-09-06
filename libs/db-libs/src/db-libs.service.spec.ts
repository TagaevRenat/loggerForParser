import { Test, TestingModule } from '@nestjs/testing';
import { DbLibsService } from './db-libs.service';

describe('DbLibsService', () => {
  let service: DbLibsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbLibsService],
    }).compile();

    service = module.get<DbLibsService>(DbLibsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
