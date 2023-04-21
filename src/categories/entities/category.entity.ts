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
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: true })
  active: boolean;

  @Column({ length: 50, nullable: false, unique: true })
  name: string;

  @Column({ length: 150, nullable: false })
  description: string;

  @Column({ length: 150, nullable: false, unique: true })
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

  constructor(category?: Partial<Category>) {
    this.id = category?.id;
    this.name = category?.name;
    this.description = category?.description;
    this.slug = category?.slug;
  }
}
