// src/clients/clients.service.ts
import { Injectable } from '@nestjs/common';
import { MongoDBService } from './mongodb/mongodb.service';
import { Client } from './interfaces/client.interface';
import { CreateClientDto } from './dto/create-client.dto';
import { ClientsDao } from './clients.dao';

@Injectable()
export class ClientsService {
    constructor(private readonly clientsDao: ClientsDao) {}

    async findAll(): Promise<any> {
        return await this.clientsDao.find()
    }

  async create(createClientDto: CreateClientDto): Promise<any> {
    const result = await this.clientsDao.create(createClientDto)
    return result;
  }
}
