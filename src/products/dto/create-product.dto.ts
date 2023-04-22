import { IsArray, IsString, MaxLength } from 'class-validator';
import { Category } from '../../categories/entities/category.entity';

export class CreateProductDto {
  @MaxLength(60)
  @IsString()
  name: string;

  @MaxLength(300)
  description: string;

  @IsArray()
  categories: Category[];
}
