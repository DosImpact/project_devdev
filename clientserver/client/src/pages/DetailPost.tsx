import React from 'react';
import PostDetail from 'components/PostDetail';
import { useParams } from 'react-router';

const DetailPost = () => {
  const params = useParams() as { id: string };
  return (
    <div>
      <PostDetail postId={Number(params.id)} />
    </div>
  );
};

export default DetailPost;
