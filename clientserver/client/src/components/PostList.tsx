import React from 'react';
import usePosts from 'states/blog/query/usePosts';
import styled from 'styled-components';
import PostListItem from './PostListItem';

const PostList = () => {
  const { postsQuery } = usePosts();
  if (postsQuery.isLoading) return <div>✨✨✨ Loading...</div>;
  if (postsQuery.isError) return <div>👀 Error...</div>;
  return (
    <SPostList>
      {postsQuery.data &&
        postsQuery.data.posts &&
        postsQuery.data.posts.map((post, idx) => {
          return <PostListItem key={idx} post={post} />;
        })}
    </SPostList>
  );
};

export default PostList;

const SPostList = styled.section`
  padding: 0rem 2rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, 30rem);
  grid-gap: 4rem;
  /* grid-auto-rows: */
`;
