import { Test, TestingModule } from '@nestjs/testing';
import { DesignsService } from './designs.service';

describe('DesignsService', () => {
  let service: DesignsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DesignsService],
    }).compile();

    service = module.get<DesignsService>(DesignsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
