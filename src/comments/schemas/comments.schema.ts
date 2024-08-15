// schemas/comment.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Comment extends Document {
  @Prop({ required: true })
  productId: string;

  @Prop({ required: true })
  clientEmail: string;

  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  date: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
