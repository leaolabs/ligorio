import { Module } from '@nestjs/common';
import { VariationsValuesService } from './variations-values.service';
import { VariationsValuesController } from './variations-values.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VariationValues } from '../entities/variation-values.entity';

@Module({
  providers: [VariationsValuesService],
  controllers: [VariationsValuesController],
  imports: [TypeOrmModule.forFeature([VariationValues])],
})
export class VariationsValuesModule {}
