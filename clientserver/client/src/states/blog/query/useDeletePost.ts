import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { blogApi } from '../../api';
import { DeletePostOutput } from '../interface/mutation.dtos';

const useDeletePost = () => {
  const queryClient = useQueryClient();
  const refresh = () => {
    queryClient.invalidateQueries('usePosts');
  };

  const deletePostMutation = useMutation<
    AxiosResponse<DeletePostOutput>,
    AxiosError,
    number
  >(
    'useDeletePost',
    (postId) => {
      return blogApi.DELETE.deletePost(postId);
    },
    {
      onSuccess: () => {
        refresh();
      },
    },
  );
  return { deletePostMutation };
};
export default useDeletePost;
