// src/artisans/artisans.service.ts

import { Injectable } from '@nestjs/common';
import { ArtisansDao } from './artisans.dao';
import { CreateArtisanDto } from './dto/create-artisan.dto';
import { Artisan } from './schemas/artisan.schema';

@Injectable()
export class ArtisansService {
    constructor(private readonly artisansDao: ArtisansDao) {}

    async findAll(): Promise<any> {
        return await this.artisansDao.find();
    }

    async create(createArtisanDto: CreateArtisanDto): Promise<any> {
        return await this.artisansDao.create(createArtisanDto);
    }

    async login(credentials: { username: string, password: string }): Promise<any> {
        const { username, password } = credentials;

        const artisan = await this.artisansDao.findByUsername(username);

        if (!artisan) {
            return { success: false, message: 'Utilisateur non trouvé' };
        }

        if (artisan.password !== password) {
            return { success: false, message: 'Mot de passe incorrect' };
        }

        return { success: true, message: 'Connexion réussie', artisan };
    }

    async getArtisanIdByUsername(username: string): Promise<string | null> {
        const artisan = await this.artisansDao.findByUsername(username);
        return artisan ? artisan._id.toString() : null;
    }
}
