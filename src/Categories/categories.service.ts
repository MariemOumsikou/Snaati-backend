// src/category/categories.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './interfaces/categories.interface';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.find().exec();
  }

  async findByName(name: string): Promise<Category | null> {
    return this.categoryModel.findOne({ name }).exec();
  }
  async findSubcategoriesByCategoryName(categoryName: string): Promise<any> {
    const category = await this.categoryModel.findOne({ name: categoryName }).exec();
    return category ? category.subcategories : [];
  }
}
