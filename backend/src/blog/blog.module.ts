import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [BlogService],
  controllers: [BlogController],
  exports: [],
})
export class BlogModule {}
