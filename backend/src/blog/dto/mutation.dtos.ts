import { IsString } from 'class-validator';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Comment } from '../entities/comment.entity';
import { Post } from '../entities/post.entity';

export class CreatePostInput {
  @IsString()
  title: string;

  @IsString()
  content: string;
}
export class CreatePostOutput extends CoreOutput {
  post?: Post;
}

export class CreateCommentInput {
  @IsString()
  content: string;
}
export class CreateCommentOutput extends CoreOutput {
  comment?: Comment;
}

export class DeletePostOutput extends CoreOutput {
  post?: Post;
}

export class UpdatePostInput {
  @IsString()
  title: string;

  @IsString()
  content: string;
}
export class UpdatePostOutput extends CoreOutput {
  post?: Post;
}
