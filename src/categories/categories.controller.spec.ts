import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

describe('CategoriesController', () => {
  let categoryController: CategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [
        {
          provide: CategoriesService,
          useValue: {},
        },
      ],
    }).compile();

    categoryController = module.get<CategoriesController>(CategoriesController);
  });

  it('should be defined', () => {
    expect(categoryController).toBeDefined();
  });
});
