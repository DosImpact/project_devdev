import { CoreOutput } from 'states/common/interface/dtos';

export interface GetPostByIdOutput extends CoreOutput {
  post?: Post;
}
export interface GetAllPostsOutput extends CoreOutput {
  posts?: Post[];
}
