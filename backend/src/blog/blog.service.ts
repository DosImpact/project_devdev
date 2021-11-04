import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateCommentInput,
  CreateCommentOutput,
  CreatePostInput,
  CreatePostOutput,
  DeletePostOutput,
  UpdatePostInput,
  UpdatePostOutput,
} from './dto/mutation.dtos';
import { GetAllPostsOutput, GetPostByIdOutput } from './dto/query.dtos';
import { Comment } from './entities/comment.entity';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
  ) {}

  async getPostById(postId: number): Promise<GetPostByIdOutput> {
    try {
      const post = await this.postRepo.findOneOrFail({
        where: { id: postId },
        relations: ['comments'],
      });
      return { ok: true, post };
    } catch (error) {
      throw new NotFoundException();
    }
  }
  async getAllPosts(): Promise<GetAllPostsOutput> {
    const posts = await this.postRepo.find({
      order: { createAt: 'DESC' },
      relations: ['comments'],
    });
    return { ok: true, posts };
  }
  async createPost({
    content,
    title,
  }: CreatePostInput): Promise<CreatePostOutput> {
    const post = await this.postRepo.save(
      this.postRepo.create({ content, title }),
    );
    return { ok: true, post };
  }
  async deletePost(postId: number): Promise<DeletePostOutput> {
    const { post } = await this.getPostById(postId);
    if (post) {
      await this.postRepo.softRemove(post);
      return { ok: true, post };
    } else {
      return { ok: false };
    }
  }
  async updatePost(
    postId: number,
    { content, title }: UpdatePostInput,
  ): Promise<UpdatePostOutput> {
    let { post } = await this.getPostById(postId);
    if (post) {
      if (content) post.content = content;
      if (title) post.title = title;
      await this.postRepo.save(post);
      return { ok: true, post };
    } else {
      return { ok: false };
    }
  }
}

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepo: Repository<Comment>,
    private readonly postService: PostService,
  ) {}

  async createComment(
    postId: number,
    { content }: CreateCommentInput,
  ): Promise<CreateCommentOutput> {
    const { post } = await this.postService.getPostById(postId);
    if (post) {
      const comment = await this.commentRepo.save(
        this.commentRepo.create({ content, postId: post.id }),
      );
      return { ok: true, comment };
    }
    throw new NotFoundException();
  }
}
