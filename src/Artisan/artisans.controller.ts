// src/artisans/artisans.controller.ts

import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { ArtisansService } from './artisans.service';
import { CreateArtisanDto } from './dto/create-artisan.dto';

@Controller('api/artisans')
export class ArtisansController {
    constructor(private readonly artisansService: ArtisansService) {}

    @Post()
    async create(@Body() createArtisanDto: CreateArtisanDto): Promise<any> {
        return await this.artisansService.create(createArtisanDto);
    }

    @Get()
    async findAll(): Promise<any> {
        return await this.artisansService.findAll();
    }

    @Post('login')
    async login(@Body() credentials: { username: string, password: string }): Promise<any> {
        return await this.artisansService.login(credentials);
    }

    @Get('/id-by-username/:username')
    async getArtisanIdByUsername(@Param('username') username: string) {
        const artisan = await this.artisansService.getArtisanIdByUsername(username);
        if (!artisan) {
            throw new NotFoundException('Artisan non trouvé');
        }
        return { artisanId: artisan };
    }

    @Get('check-email')
    async checkEmail(@Query('email') email: string): Promise<{ exists: boolean }> {
      const client = await this.artisansService.findByEmail(email);
      return { exists: !!client };
    }
}
