import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './schemas/comments.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel('Comment') private readonly commentModel: Model<Comment>,
  ) {}

  async addComment(productId: string, userId: string, text: string): Promise<Comment> {
    const newComment = new this.commentModel({ productId, userId, text });
    return newComment.save();
  }

  async getCommentsForProduct(productId: string): Promise<Comment[]> {
    return this.commentModel.find({ productId }).exec();
  }
}
