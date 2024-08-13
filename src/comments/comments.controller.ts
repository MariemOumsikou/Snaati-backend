import { Body, Controller, Post, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('products/:productId/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async createComment(
    @Param('productId') productId: string,
    @Body() createCommentDto: CreateCommentDto
  ) {
    return this.commentsService.createComment(productId, createCommentDto);
  }
}
