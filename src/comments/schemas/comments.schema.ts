import { Schema, Document } from 'mongoose';

export const CommentSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export interface Comment extends Document {
  productId: string;
  userId: string;
  text: string;
  createdAt: Date;
}
