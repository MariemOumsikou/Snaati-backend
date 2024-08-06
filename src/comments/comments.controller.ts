import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async addComment(
    @Body('productId') productId: string,
    @Body('userId') userId: string,
    @Body('text') text: string,
  ) {
    return this.commentsService.addComment(productId, userId, text);
  }

  @Get(':productId')
  async getCommentsForProduct(@Param('productId') productId: string) {
    return this.commentsService.getCommentsForProduct(productId);
  }
}
