import { IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @MaxLength(60)
  @IsString()
  name: string;

  @MaxLength(300)
  description: string;
}
