import { Test, TestingModule } from '@nestjs/testing';
import { VariationsValuesController } from './variations-values.controller';

describe('VariationsValuesController', () => {
  let controller: VariationsValuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VariationsValuesController],
    }).compile();

    controller = module.get<VariationsValuesController>(VariationsValuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
