import { CoreEntity } from 'states/common/interface/entities';
import { Comment } from './comment.entity';

export interface Post extends CoreEntity {
  title: string;
  content: string;
  comments: Comment[];
}
