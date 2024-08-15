// comments.controller.ts
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  async getComments(@Query('productId') productId: string) {
    return this.commentsService.findCommentsByProductId(productId);
  }
}
