import { Category } from './category.entity';

test('create a category', () => {
  const category = new Category({
    active: true,
    name: 'T-Shirt',
    description: 'T-Shirt description',
    slug: 'tshirt-description',
  });

  expect(category).toBeInstanceOf(Category);
  expect(category.name).toBe('T-Shirt');
});
