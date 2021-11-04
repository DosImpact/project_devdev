import { AxiosError, AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { blogApi } from '../../api';
import { CreatePostInput, CreatePostOutput } from '../interface/mutation.dtos';

const useCreatePost = (postId: number | string) => {
  const postsQuery = useMutation<
    AxiosResponse<CreatePostOutput>,
    AxiosError,
    CreatePostInput
  >('useCreatePost', (data) => {
    return blogApi.POST.createPost(data);
  });
  return { postsQuery };
};
export default useCreatePost;
