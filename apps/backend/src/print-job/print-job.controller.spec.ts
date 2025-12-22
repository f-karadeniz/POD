import { Test, TestingModule } from '@nestjs/testing';
import { PrintJobsController } from './print-job.controller';

describe('PrintJobsController', () => {
  let controller: PrintJobsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrintJobsController],
    }).compile();

    controller = module.get<PrintJobsController>(PrintJobsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
