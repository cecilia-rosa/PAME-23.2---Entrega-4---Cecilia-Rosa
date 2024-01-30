import { Test, TestingModule } from '@nestjs/testing';
import { IService } from './i.service';

describe('IService', () => {
  let service: IService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IService],
    }).compile();

    service = module.get<IService>(IService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
