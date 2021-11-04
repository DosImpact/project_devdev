## 과제 2

① 주제: 블로그 개발 (Database, Front-end)

② 필수 SPEC:
-메인 페이지
-글 쓰기 수정 기능
-글 목록 삭제 기능
-댓글 기능


③ 옵션 SPEC:

-UI 디자인
-관리자 도구
-Trackback
-RSS

## Feature Todo List
- [x] Project Setup ( backend )
  - [x] nest new
  - [x] configService & env settings
  - [x] docker postgres
  - [x] docker redis

- [x] Project Setup ( frontend )
  - [x] npx create-react-app --tempate=typescript client
  - [x] env settings
  - [x] package install

- [x] Blog 쓰기,목록,삭제,수정
  - [x]  모델링 & entity 설계
  - [x]  DTO 및 API 설계
  - [x]  Service 로직 작성
  - [x]  Front interface 가져오기
  - [x]  Front QueryHook 정의 

- [x] Comment 쓰기,목록
  - [x]  모델링 & entity 설계
  - [x]  DTO 및 API 설계
  - [x]  Service 로직 작성
  - [x]  Front interface 가져오기
  - [x]  Front QueryHook 정의 

- [x] React Logic & Publish
  - [x] PostList 
  - [x] PostCompoent
  - [x] CommentCompoent
  - [x] HomePage
  - [x] EditPage
  - [x] DetailPage
  - [x] NewPostPage


- [x] Project deploy
  - [x] setting prod env 
  - [x] NestJS Server PM2 clustor
  - [x] React Web Server PM2 clustor




```
yarn add axios antd-mobile immer react-helmet react-loading-skeleton react-query react-reveal react-router-dom recoil styled-breakpoints styled-components styled-reset @toast-ui/react-editor

yarn add -D @types/react-router-dom @types/styled-components @types/react-helmet
```