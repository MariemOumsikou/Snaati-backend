// src/clients/clients.service.ts

import { Injectable } from '@nestjs/common';
import { ClientsDao } from './clients.dao';
import { CreateClientDto } from './dto/create-client.dto';
import { Client, ClientDocument } from './schemas/client.schema';

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

        // Vérifiez le mot de passe haché ici
        // Remplacez ceci par une comparaison de mot de passe sécurisée avec bcrypt ou une autre méthode
        if (client.password !== password) {
            return { success: false, message: 'Mot de passe incorrect' };
        }

        return { success: true, message: 'Connexion réussie', client };
    }

    async getClientIdByUsername(username: string): Promise<string | null> {
        const client = await this.clientsDao.findByUsername(username);
        return client ? client._id.toString() : null;
    }

    async findByEmail(email: string): Promise<ClientDocument | null> {
        return this.clientsDao.findByEmail(email);
    }

    async getClientNameByEmail(email: string): Promise<string | null> {
        const client = await this.clientsDao.findByEmail(email);
        return client ? client.username : null;  // ou `client.name` si vous stockez le nom sous un autre champ
    }
}
