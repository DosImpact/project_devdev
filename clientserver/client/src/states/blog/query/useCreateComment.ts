import { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { blogApi } from '../../api';
import {
  CreateCommentInput,
  CreateCommentOutput,
  CreatePostInput,
  CreatePostOutput,
} from '../interface/mutation.dtos';

const useCreateComment = (postId: number | string) => {
  const postsQuery = useMutation<
    AxiosResponse<CreateCommentOutput>,
    AxiosError,
    {
      postId: number;
      body: CreateCommentInput;
    }
  >('useCreateComment', ({ body, postId }) => {
    return blogApi.POST.createComment(postId, body);
  });
  return { postsQuery };
};
export default useCreateComment;
