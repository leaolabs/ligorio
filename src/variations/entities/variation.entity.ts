import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VariationValues } from './variation-values.entity';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Variation {
  // Variation: color, weight, etc...

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, length: 50 })
  name: string;

  @OneToMany(
    () => VariationValues,
    (variationValues: VariationValues) => variationValues.variation,
    {
      cascade: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn()
  variationValues: VariationValues[];

  @ManyToMany(() => Product, (product) => product.variations)
  products: Product[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
