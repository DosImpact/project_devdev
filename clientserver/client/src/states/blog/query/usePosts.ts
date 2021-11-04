import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { GetAllPostsOutput } from '../interface/query.dtos';
import { blogApi } from '../../api';

const usePosts = () => {
  const postsQuery = useQuery<
    AxiosResponse<GetAllPostsOutput>,
    AxiosError,
    GetAllPostsOutput
  >(
    'usePosts',
    () => {
      return blogApi.GET.getAllPosts();
    },
    {
      select: (data) => data.data,
    },
  );
  return { postsQuery };
};
export default usePosts;
