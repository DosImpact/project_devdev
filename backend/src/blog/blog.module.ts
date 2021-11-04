import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [BlogService],
  controllers: [PostController],
  exports: [],
})
export class BlogModule {}
