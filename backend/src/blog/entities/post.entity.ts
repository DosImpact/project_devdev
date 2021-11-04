import { IsDateString, IsNumber, IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { Comment } from './comment.entity';

@Entity({ name: 'post' })
export class Post extends CoreEntity {
  @IsString()
  @Column()
  title: string;

  @IsString()
  @Column({ type: 'text' })
  content: string;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
