import { Document } from 'mongoose';

export interface Category extends Document {
  readonly name: string;
  readonly imageUrl: string;
  readonly description: string;
  readonly subcategories: {
    id: string;
    name: string;
  }[];
}
