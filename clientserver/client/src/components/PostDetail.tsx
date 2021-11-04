import React, { useState } from 'react';
import usePost from 'states/blog/query/usePost';
import { Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';
import WideLine from './WideLine';
import { IconComment } from './Icons';
import useCreateComment from 'states/blog/query/useCreateComment';
import useDeletePost from 'states/blog/query/useDeletePost';
import { Button } from './Buttons';
import { useHistory } from 'react-router';
interface IPostDetail {
  postId: number;
}

const PostDetail: React.FC<IPostDetail> = ({ postId }) => {
  const { createCommentMutation } = useCreateComment();
  const { deletePostMutation } = useDeletePost();
  const [comInput, setComInput] = useState('');
  const { postsQuery } = usePost(postId);
  const history = useHistory();

  const handleCommitComment = async () => {
    if (comInput) {
      createCommentMutation.mutateAsync({
        postId,
        body: {
          content: comInput,
        },
      });
    }

    setComInput('');
  };

  const handleDeletePost = async () => {
    deletePostMutation.mutateAsync(postId);
    history.push('/');
  };
  const handleEditPost = async () => {
    history.push(`/edit-post/${postId}`);
  };

  if (postsQuery.isLoading) {
    return <div>loading...</div>;
  }
  if (postsQuery.data && postsQuery.data.post) {
    const { post } = postsQuery.data;
    return (
      <SPostDetail>
        <div className="wrapper">
          <div className="title">{post?.title}</div>
          <WideLine />
          {postsQuery.data && postsQuery.data.post && (
            <Viewer initialValue={postsQuery.data.post.content} />
          )}
          <WideLine />
          <div className="commentWrapper">
            <div className="commentHeader">
              <IconComment /> {post.comments.length}
              <input
                placeholder="댓글을 입력하세요.(엔터)"
                type="text"
                value={comInput}
                onChange={(e) => setComInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleCommitComment();
                  }
                }}
              />
            </div>
            <WideLine />
            <div>
              {post.comments.map((comment, idx) => {
                return (
                  <div key={idx} className="comment">
                    {comment.content}{' '}
                    <span className="date">
                      {String(comment.createAt).substr(0, 10)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="editZone">
            <Button className="btn" type="blue" onClick={handleEditPost}>
              수정
            </Button>
            <Button className="btn" type="danger" onClick={handleDeletePost}>
              삭제
            </Button>
          </div>
        </div>
      </SPostDetail>
    );
  } else {
    return <div>No Post😢</div>;
  }
};

export default PostDetail;

const SPostDetail = styled.article`
  ${(props) => props.theme.shadowN1};
  padding: 10rem 0rem;
  min-height: 80vh;
  .wrapper {
    margin: 0rem auto;
    max-width: 72rem;
    .title {
      font-size: ${(props) => props.theme.FontSizeXXlg};
      font-weight: 700;
    }
  }
  .editZone {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .btn {
      margin: 0rem 0.5rem;
    }
  }
  .commentWrapper {
    .commentHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .comment {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0rem;
    }
    .date {
      color: ${(props) => props.theme.ColorMainGray};
    }
  }
`;
