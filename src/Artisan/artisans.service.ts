import { Injectable } from '@nestjs/common';
import { ArtisansDao } from './artisans.dao';
import { CreateArtisanDto } from './dto/create-artisan.dto';
import { Artisan } from './schemas/artisan.schema';

@Injectable()
export class ArtisansService {
    constructor(private readonly ArtisansDao: ArtisansDao) {}

    async findAll(): Promise<Artisan[]> {
        return this.ArtisansDao.find();
    }

    async create(createartisanDto: CreateArtisanDto): Promise<Artisan> {
        return this.ArtisansDao.create(createartisanDto);
    }

    async login(credentials: { username: string; password: string }): Promise<{ success: boolean; message: string; artisan?: Artisan }> {
        const { username, password } = credentials;

        const artisan = await this.ArtisansDao.findByUsername(username);

        if (!artisan) {
            return { success: false, message: 'Utilisateur non trouvé' };
        }

        // Vérifier le mot de passe haché ici si vous utilisez bcrypt ou une autre méthode de hachage
        if (artisan.password !== password) {
            return { success: false, message: 'Mot de passe incorrect' };
        }

        return { success: true, message: 'Connexion réussie', artisan };
    }

    async getArtisanIdByUsername(username: string): Promise<string | null> {
        const artisan = await this.ArtisansDao.findByUsername(username);
        return artisan ? artisan._id.toString() : null;
    }


    async findByEmail(email: string): Promise<Artisan | null> {
        return this.ArtisansDao.findByEmail(email);
    }
}
