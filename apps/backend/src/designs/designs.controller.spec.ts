import { Test, TestingModule } from '@nestjs/testing';
import { DesignsController } from './designs.controller';

describe('DesignsController', () => {
  let controller: DesignsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DesignsController],
    }).compile();

    controller = module.get<DesignsController>(DesignsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
