import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { GetPostByIdOutput } from '../interface/query.dtos';
import { blogApi } from '../../api';

const usePost = (postId: number | string) => {
  const postsQuery = useQuery<
    AxiosResponse<GetPostByIdOutput>,
    AxiosError,
    GetPostByIdOutput
  >(
    'usePost',
    () => {
      return blogApi.GET.getPostById(Number(postId));
    },
    {
      select: (data) => data.data,
      retry: 1,
    },
  );
  return { postsQuery };
};
export default usePost;
