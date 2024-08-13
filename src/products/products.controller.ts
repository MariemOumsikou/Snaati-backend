// src/products/products.controller.ts
import { Controller, Get, Param, Query, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Endpoint to get all products
  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get()
  async search(@Query('search') search: string): Promise<Product[]> {
    return this.productsService.searchProducts(search);
  }

  // Endpoint to get products by category and optional subcategory
  @Get('category/:category')
  async getProductsByCategory(
    @Param('category') category: string,
    @Query('subcategory') subcategory?: string
  ): Promise<Product[]> {
    return this.productsService.findByCategoryAndSubcategory(category, subcategory);
  }

  // Endpoint to get a product by ID
  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<Product> {
    const product = await this.productsService.findById(id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  @Get('artisan/:artisanId')
  async getProductsByArtisanId(@Param('artisanId') artisanId: string): Promise<Product[]> {
    return this.productsService.findByArtisanId(artisanId);
  }

    // Endpoint to get products by subcategory
    @Get('subcategory/:subcategory')
    async getProductsBySubcategory(
      @Param('subcategory') subcategory: string
    ): Promise<Product[]> {
      return this.productsService.findBySubcategory(subcategory);
    }
    
}
