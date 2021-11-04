import { CoreOutput } from 'states/common/interface/dtos';
import { Post } from './post.entity';

export interface CreatePostInput {
  title: string;
  content: string;
}
export interface CreatePostOutput extends CoreOutput {
  post?: Post;
}

export interface CreateCommentInput {
  content: string;
}
export interface CreateCommentOutput extends CoreOutput {
  comment?: Comment;
}

export interface DeletePostOutput extends CoreOutput {
  post?: Post;
}

export interface UpdatePostInput {
  title: string;
  content: string;
}
export interface UpdatePostOutput extends CoreOutput {
  post?: Post;
}
