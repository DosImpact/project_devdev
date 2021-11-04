import axios from 'axios';
import {
  CreateCommentInput,
  CreatePostInput,
  UpdatePostInput,
} from './blog/interface/mutation.dtos';

// base setttings ,  interceptors

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URI;

export const blogApi = {
  GET: {
    getPostById: (postId: number) => axios.get(`posts/${Number(postId)}`),
    getAllPosts: () => axios.get('posts'),
  },
  POST: {
    createPost: (body: CreatePostInput) => axios.post('posts', body),
    createComment: (postId: number, body: CreateCommentInput) =>
      axios.post(`posts/${postId}/comment`, body),
  },
  PATCH: {
    updatePost: (postId: number, body: UpdatePostInput) =>
      axios.post(`posts/${postId}`, body),
  },
  DELETE: {
    deletePost: (postId: number) => axios.post(`posts/${postId}`),
  },
};
