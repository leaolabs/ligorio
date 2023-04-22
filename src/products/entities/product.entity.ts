import slugify from 'slugify';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Variation } from '../../variations/entities/variation.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  active: boolean;

  @Column({ length: 60, nullable: false, unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ length: 100, nullable: false, unique: true })
  slug: string;

  @ManyToMany(() => Variation, (variation) => variation.products)
  @JoinTable()
  variations: Variation[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @BeforeInsert()
  setSlug() {
    this.slug = slugify(this.name, {
      lower: true,
    });
  }
}
