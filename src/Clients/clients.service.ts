import { Injectable } from '@nestjs/common';
import { ClientsDao } from './clients.dao';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './schemas/client.schema';

@Injectable()
export class ClientsService {
    constructor(private readonly clientsDao: ClientsDao) {}

    async findAll(): Promise<Client[]> {
        return this.clientsDao.find();
    }

    async create(createClientDto: CreateClientDto): Promise<Client> {
        return this.clientsDao.create(createClientDto);
    }

    async login(credentials: { username: string; password: string }): Promise<{ success: boolean; message: string; client?: Client }> {
        const { username, password } = credentials;

        const client = await this.clientsDao.findByUsername(username);

        if (!client) {
            return { success: false, message: 'Utilisateur non trouvé' };
        }

        // Vérifier le mot de passe haché ici si vous utilisez bcrypt ou une autre méthode de hachage
        if (client.password !== password) {
            return { success: false, message: 'Mot de passe incorrect' };
        }

        return { success: true, message: 'Connexion réussie', client };
    }

    async getClientIdByUsername(username: string): Promise<string | null> {
        const client = await this.clientsDao.findByUsername(username);
        return client ? client._id.toString() : null;
    }

    async findByEmail(email: string): Promise<Client | null> {
        return this.clientsDao.findByEmail(email);
    }
}
