import React from 'react';
import { Post } from 'states/blog/interface/post.entity';
import styled from 'styled-components';
import { Viewer } from '@toast-ui/react-editor';
import { IconComment } from './Icons';
import { Link } from 'react-router-dom';

interface IPostListItem {
  post: Post;
}
const PostListItem: React.FC<IPostListItem> = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`}>
      <SPostListItem>
        <div className="title">
          {post.title}
          <div className="comment">
            <IconComment /> {post.comments.length}
          </div>
        </div>

        <div className="content">
          <Viewer initialValue={post.content} />
        </div>
      </SPostListItem>
    </Link>
  );
};

export default PostListItem;

const SPostListItem = styled.section`
  max-width: 30rem;
  height: 40rem;
  ${(props) => props.theme.shadowN1};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.ColorMainLightYellow};
  }
  .title {
    padding: 2rem;
    font-size: ${(props) => props.theme.FontSizeXXlg};
    font-weight: 700;
    background-color: ${(props) => props.theme.ColorMainLightYellow};
    overflow-x: hidden;
    overflow-y: hidden;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content {
    padding: 0 2rem;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .comment {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 1rem;
    height: 3rem;
    svg {
      margin-right: 1rem;
    }
  }
`;
