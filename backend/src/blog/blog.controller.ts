import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Version,
} from '@nestjs/common';
import { CommentService, PostService } from './blog.service';
import {
  CreateCommentInput,
  CreatePostInput,
  UpdatePostInput,
} from './dto/mutation.dtos';

@Controller('/api/posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly commentService: CommentService,
  ) {}
  @Version('1')
  @Get('/:id')
  async getPostById(@Param('id') postId: number) {
    return this.postService.getPostById(postId);
  }

  @Version('1')
  @Get('')
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Version('1')
  @Post('/:id/comment')
  async createComment(
    @Param('id') postId: number,
    @Body() createCommentInput: CreateCommentInput,
  ) {
    return this.commentService.createComment(postId, createCommentInput);
  }

  @Version('1')
  @Post('')
  async createPost(@Body() createPostInput: CreatePostInput) {
    return this.postService.createPost(createPostInput);
  }

  @Version('1')
  @Delete('/:id')
  async deletePost(@Param('id') postId: number) {
    return this.postService.deletePost(postId);
  }

  @Version('1')
  @Patch('/:id')
  async updatePost(
    @Param('id') postId: number,
    @Body() updatePostInput: UpdatePostInput,
  ) {
    return this.postService.updatePost(postId, updatePostInput);
  }
}

@Controller('/api/comments')
export class CommentController {}
