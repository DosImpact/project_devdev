import { IsDateString, IsNumber, IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Post } from './post.entity';

@Entity({ name: 'comment' })
export class Comment extends CoreEntity {
  @IsString()
  @Column({ type: 'text' })
  content: string;

  @IsNumber()
  @Column()
  postId: number;

  @ManyToOne(() => Post, (post) => post.comments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'postId' })
  post: Post;
}
