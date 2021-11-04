import { IsDateString, IsNumber, IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'comment' })
export class Comment extends CoreEntity {
  @IsString()
  @Column({ type: 'text' })
  content: string;
}
