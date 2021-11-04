import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { GetPostByIdOutput } from '../interface/query.dtos';
import { blogApi } from '../../api';
import { Post } from '../interface/post.entity';

const usePosts = (postId: number | string) => {
  const postsQuery = useQuery<
    AxiosResponse<GetPostByIdOutput>,
    AxiosError,
    GetPostByIdOutput
  >(
    'usePosts',
    () => {
      return blogApi.GET.getPostById(postId);
    },
    {
      select: (data) => data.data,
    },
  );
  return { postsQuery };
};
export default usePosts;
