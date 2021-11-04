import { CoreOutput } from 'src/common/dtos/output.dto';
import { Post } from '../entities/post.entity';

export class GetPostByIdOutput extends CoreOutput {
  post?: Post;
}
export class GetAllPostsOutput extends CoreOutput {
  posts?: Post[];
}
