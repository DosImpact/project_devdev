import { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { blogApi } from '../../api';
import {
  DeletePostOutput,
  UpdatePostInput,
  UpdatePostOutput,
} from '../interface/mutation.dtos';

const useUpdatePost = () => {
  const postsQuery = useMutation<
    AxiosResponse<UpdatePostOutput>,
    AxiosError,
    {
      body: UpdatePostInput;
      postId: number;
    }
  >('useUpdatePost', ({ body, postId }) => {
    return blogApi.PATCH.updatePost(postId, body); //DELETE.deletePost(postId);
  });
  return { postsQuery };
};
export default useUpdatePost;
