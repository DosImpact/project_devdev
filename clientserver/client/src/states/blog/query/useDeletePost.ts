import { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { blogApi } from '../../api';
import { DeletePostOutput } from '../interface/mutation.dtos';

const useDeletePost = (postId: number | string) => {
  const postsQuery = useMutation<
    AxiosResponse<DeletePostOutput>,
    AxiosError,
    number
  >('useDeletePost', (postId) => {
    return blogApi.DELETE.deletePost(postId);
  });
  return { postsQuery };
};
export default useDeletePost;
