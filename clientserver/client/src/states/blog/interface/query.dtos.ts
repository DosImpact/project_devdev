import { CoreOutput } from 'states/common/interface/dtos';
import { Post } from './post.entity';

export interface GetPostByIdOutput extends CoreOutput {
  post?: Post;
}
export interface GetAllPostsOutput extends CoreOutput {
  posts?: Post[];
}
