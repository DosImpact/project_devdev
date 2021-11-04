import { IsString } from 'class-validator';
import { CoreOutput } from 'src/common/dtos/output.dto';
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
