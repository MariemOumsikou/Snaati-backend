// src/category/category.controller.ts
import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { CategoryService } from './categories.service';

@Controller('api/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll() {
    return this.categoryService.findAll();
  }

  @Get(':categoryName/subcategories')
  async getSubcategories(@Param('categoryName') categoryName: string) {
    const category = await this.categoryService.findByName(categoryName);
    if (!category) {
      throw new NotFoundException('Catégorie non trouvée');
    }
    return category.subcategories;
  }

  @Get(':categoryName/subcategories')
  async getSubcategoriesByCategoryName(@Param('categoryName') name: string): Promise<any> {
    const subcategories = await this.categoryService.findSubcategoriesByCategoryName(name);
    if (!subcategories.length) {
      throw new NotFoundException(`No subcategories found for category ${name}`);
    }
    return subcategories;
  }
}
