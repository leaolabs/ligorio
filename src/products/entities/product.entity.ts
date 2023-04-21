import slugify from 'slugify';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ default: true })
  active: boolean;

  @Column({ length: 60, nullable: false, unique: true })
  name: string;

  @Column({ length: 100, nullable: false, unique: true })
  slug: string;

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
