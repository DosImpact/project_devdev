import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { blogApi } from '../../api';
import { UpdatePostInput, UpdatePostOutput } from '../interface/mutation.dtos';

const useUpdatePost = () => {
  const queryClient = useQueryClient();
  const refresh = () => {
    queryClient.invalidateQueries('usePosts');
    queryClient.invalidateQueries('usePost');
  };

  const updatePostMutation = useMutation<
    AxiosResponse<UpdatePostOutput>,
    AxiosError,
    {
      body: UpdatePostInput;
      postId: number;
    }
  >(
    'useUpdatePost',
    ({ body, postId }) => {
      return blogApi.PATCH.updatePost(postId, body); //DELETE.deletePost(postId);
    },
    {
      onSuccess: () => {
        refresh();
      },
    },
  );
  return { updatePostMutation };
};
export default useUpdatePost;
