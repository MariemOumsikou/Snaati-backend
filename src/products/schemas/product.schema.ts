// src/products/schemas/product.schema.ts
import { Schema, Document } from 'mongoose';

export interface Product extends Document {
  title: string;
  description: string;
  price: number;
  category: string;
  subcategory: string,
  imageURL: string;
  artisanId: string;
  isPromotion?: boolean;
  isPopular?: boolean;
  publishedDate?: Date;
  stock: number;
}

export const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  imageURL: { type: String, required: true },
  artisanId: { type: String, required: true },
  isPromotion: { type: Boolean},
  isPopular: { type: Boolean },
  publishedDate: { type: Date, default: Date.now },
  stock: {type: Number},
});
