import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { blogApi } from '../../api';
import { CreatePostInput, CreatePostOutput } from '../interface/mutation.dtos';

const useCreatePost = () => {
  const queryClient = useQueryClient();
  const refresh = () => {
    queryClient.invalidateQueries('usePosts');
  };

  const createPostMutation = useMutation<
    AxiosResponse<CreatePostOutput>,
    AxiosError,
    CreatePostInput
  >(
    'useCreatePost',
    (data) => {
      return blogApi.POST.createPost(data);
    },
    {
      onSuccess: () => {
        refresh();
      },
    },
  );
  return { createPostMutation };
};
export default useCreatePost;
