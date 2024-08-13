import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './schemas/comments.schema';

@Injectable()
export class CommentsService {
  constructor(@InjectModel('Comment') private commentModel: Model<Comment>) {}

  async createComment(productId: string, createCommentDto: CreateCommentDto) {
    const newComment = new this.commentModel({
      ...createCommentDto,
      productId,
      createdAt: new Date(),
    });
    console.log('Saving comment:', newComment);
    return newComment.save();
  }
}
