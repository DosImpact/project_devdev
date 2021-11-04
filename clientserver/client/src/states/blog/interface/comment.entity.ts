import { CoreEntity } from 'states/common/interface/entities';
import { Post } from './post.entity';

export interface Comment extends CoreEntity {
  content: string;
  postId: number;
  post: Post;
}
