import { Test, TestingModule } from '@nestjs/testing';
import { PrintJobsService } from './print-job.service';

describe('PrintJobService', () => {
  let service: PrintJobsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrintJobsService],
    }).compile();

    service = module.get<PrintJobsService>(PrintJobsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
