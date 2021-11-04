import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { blogApi } from '../../api';
import {
  CreateCommentInput,
  CreateCommentOutput,
} from '../interface/mutation.dtos';

const useCreateComment = () => {
  const queryClient = useQueryClient();
  const refresh = () => {
    queryClient.invalidateQueries('usePosts');
    queryClient.invalidateQueries('usePost');
  };

  const createCommentMutation = useMutation<
    AxiosResponse<CreateCommentOutput>,
    AxiosError,
    {
      postId: number;
      body: CreateCommentInput;
    }
  >(
    'useCreateComment',
    ({ body, postId }) => {
      return blogApi.POST.createComment(postId, body);
    },
    {
      onSuccess: () => {
        refresh();
      },
    },
  );
  return { createCommentMutation };
};
export default useCreateComment;
