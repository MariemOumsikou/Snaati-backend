import { Schema, Document } from 'mongoose';

export interface Comment extends Document {
  productId: string;
  clientId: string;
  text: string;
  createdAt: Date;
}

export const CommentSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
