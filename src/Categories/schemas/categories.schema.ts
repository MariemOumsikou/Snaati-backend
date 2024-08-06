// src/category/schemas/categories.schema.ts
import { Schema, Document } from 'mongoose';

export const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: String,
  imageURL: String,
  subcategories: [{
    name: String,
    description: String,
    imageURL: String
  }]
});

export interface Category extends Document {
  name: string;
  description?: string;
  imageURL?: string;
  subcategories: {
    name: string;
    description?: string;
    imageURL?: string;
  }[];
}
