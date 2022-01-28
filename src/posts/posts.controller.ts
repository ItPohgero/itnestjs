/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Response } from 'express';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    const data = {
      title: createPostDto.title,
      body: createPostDto.body,
      status: createPostDto.status,
      author: createPostDto.author,
    };
    await this.postsService.create(data);
    return {
      message: HttpStatus.OK,
      data: {
        title: data?.title,
        body: data?.body,
        status: data?.status,
        author: data?.author,
      },
      desc: 'The post has been added, you can create another post in another days',
    };
  }

  @Get()
  async findAll() {
    const data = await this.postsService.findAll();
    return data;
    // const share = data.map((v) => {
    //   return { title: v.title, body: v.body };
    // });
    // return {
    //   message: 'success',
    //   data: share,
    // };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.postsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    const data = {
      title: updatePostDto.title,
    };
    await this.postsService.update(+id, data);
    return {
      message: HttpStatus.OK,
      data: updatePostDto,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
