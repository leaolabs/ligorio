import { Module } from '@nestjs/common';
import { VariationsValuesService } from './variations-values.service';
import { VariationsValuesController } from './variations-values.controller';

@Module({
  providers: [VariationsValuesService],
  controllers: [VariationsValuesController]
})
export class VariationsValuesModule {}
