// src/clients/clients.dao.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from './schemas/client.schema';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientsDao {
    constructor(@InjectModel(Client.name) private clientModel: Model<ClientDocument>) {}

    // Récupère tous les clients
    async find(): Promise<Client[]> {
        return this.clientModel.find().exec();
    }

    // Crée un nouveau client
    async create(createClientDto: CreateClientDto): Promise<Client> {
        const createdClient = new this.clientModel(createClientDto);
        return createdClient.save();
    }

    // Recherche un client par nom d'utilisateur (à ajuster si nécessaire)
    async findByUsername(username: string): Promise<ClientDocument | null> {
        return this.clientModel.findOne({ username }).exec();
    }

    // Recherche un client par email
    async findByEmail(email: string): Promise<ClientDocument | null> {
        return this.clientModel.findOne({ email }).exec();
    }
}
