import React, { useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import useCreatePost from 'states/blog/query/useCreatePost';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Button } from './Buttons';
import useUpdatePost from 'states/blog/query/useUpdatePost';

interface IEditorContainer {
  initTitle?: string;
  initContent?: string;
  isUpdateMode?: boolean;
  postId?: number;
}

const EditorContainer: React.FC<IEditorContainer> = ({
  initTitle,
  initContent,
  isUpdateMode,
  postId,
}) => {
  const { createPostMutation } = useCreatePost();
  const { updatePostMutation } = useUpdatePost();

  const history = useHistory();
  const [title, setTitle] = useState(initTitle || '');
  const editorRef = React.useRef<Editor>(null);

  const handleSubmitButton = async () => {
    const markdown = editorRef.current?.getInstance().getMarkdown();
    console.log(markdown);
    if (isUpdateMode) {
      if (title && markdown && postId) {
        updatePostMutation.mutateAsync({
          postId,
          body: {
            title,
            content: markdown,
          },
        });
        history.push('/');
      }
    } else {
      if (title && markdown) {
        createPostMutation.mutateAsync({ title, content: markdown });
        history.push('/');
      }
    }
  };
  // useEffect(() => {
  //   if (initTitle) setTitle(initTitle);
  //   return () => {};
  // }, [initTitle, initContent]);

  return (
    <SEditorContainer>
      <input
        className="titleInput"
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="EditorSection">
        <Editor
          ref={editorRef}
          initialValue={initContent || '새로운 블로그 작성'}
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
          usageStatistics={false}
        />
      </div>
      <div className="submitWrapper">
        <span className="warn">{!title && '*제목을 입력해주세요'}</span>
        <Button
          className="submit"
          type="blue"
          onClick={() => {
            handleSubmitButton();
          }}
        >
          {isUpdateMode && isUpdateMode === true ? '수정하기' : '글쓰기'}
        </Button>
      </div>
    </SEditorContainer>
  );
};

export default EditorContainer;

const SEditorContainer = styled.section`
  .titleInput {
    font-size: 2rem;
    font-weight: 700;
  }
  .submitWrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1rem;
    margin-right: 1rem;
    .warn {
      color: ${(props) => props.theme.ColorMainRed};
      margin: 0rem 1rem;
    }
    .submit {
      font-size: 2rem;
      font-weight: 700;
      width: 30rem;
      height: 5rem;
    }
  }
`;
