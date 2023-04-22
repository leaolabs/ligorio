import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let categoriesRepository: Repository<Category>;

  const category: Category = {
    id: 1,
    active: true,
    name: 'Camiseta',
    parentId: null,
    slug: 'camiseta',
    setSlug: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    description: 'Description',
    products: [],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: getRepositoryToken(Category),
          useValue: {
            create: jest.fn(),
            save: jest.fn().mockReturnValue(category),
          },
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
    categoriesRepository = module.get<Repository<Category>>(
      getRepositoryToken(Category),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(categoriesRepository).toBeDefined();
  });

  describe('create categories', () => {
    it('should create a category successfully', async () => {
      const data: CreateCategoryDto = {
        name: 'Camiseta',
        description: 'Camiseta 100% Algodão',
      };

      const result = await service.create(data);
      expect(result).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.name).toEqual('Camiseta');
      expect(result.slug).toEqual('camiseta');
      expect(result.active).toEqual(true);
    });
  });
});
