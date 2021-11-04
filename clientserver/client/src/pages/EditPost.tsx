import React from 'react';
import EditorContainer from 'components/EditorContainer';
import { useParams } from 'react-router';
import usePost from 'states/blog/query/usePost';

const EditPost = () => {
  const params = useParams() as { id: string };
  const { postsQuery } = usePost(params.id);
  if (postsQuery.isLoading) {
    return <div>Loading...</div>;
  }
  if (postsQuery.isError) {
    return <div>No Post 😢</div>;
  }
  if (postsQuery.data?.post) {
    const { title, content } = postsQuery.data?.post;
    console.log('title, content', title, content);

    return (
      <div>
        <EditorContainer
          initContent={content}
          initTitle={title}
          isUpdateMode={true}
          postId={Number(params.id)}
        />
      </div>
    );
  } else {
    return <div>No Post 😢</div>;
  }
};

export default EditPost;
