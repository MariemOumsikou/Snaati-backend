// src/products/products.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findByCategoryAndSubcategory(category: string, subcategory?: string): Promise<Product[]> {
    const filter: { category: string; subcategory?: string } = { category };
    if (subcategory) {
      filter.subcategory = subcategory;
    }
    return this.productModel.find(filter).exec();
  }

  async findById(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async findPromotionProducts(): Promise<Product[]> {
    return this.productModel.find({ isPromotion: true }).exec();
  }

  async findPopularProducts(): Promise<Product[]> {
    return this.productModel.find({ isPopular: true }).exec();
  }

  async findRecentProducts(): Promise<Product[]> {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    return this.productModel.find({ publishedDate: { $gte: oneMonthAgo } }).exec();
  }

  async findByArtisanId(artisanId: string): Promise<Product[]> {
    const products = await this.productModel.find({ artisanId }).exec();
    if (!products.length) {
      throw new NotFoundException(`No products found for artisan with ID ${artisanId}`);
    }
    return products;
  }
}
