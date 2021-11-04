import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('/api/posts')
export class PostController {
  constructor() {}
  @Get('/:id')
  async getPostById() {
    return 'getPostById';
  }
  @Get('')
  async getAllPosts() {
    return 'getAllPosts';
  }
  @Post('')
  async createPost() {
    return 'createPost';
  }
  @Delete('')
  async deletePost() {
    return 'deletePost';
  }
  @Patch('')
  async updatePost() {
    return 'updatePost';
  }
}

@Controller('/api/comments')
export class CommentController {
  constructor() {}
}
