import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentController, PostController } from './blog.controller';
import { CommentService, PostService } from './blog.service';
import { Comment } from './entities/comment.entity';
import { Post } from './entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Comment])],
  providers: [PostService, CommentService],
  controllers: [PostController, CommentController],
  exports: [],
})
export class BlogModule {}
