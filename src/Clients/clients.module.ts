// src/clients/clients.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { Client, ClientSchema } from './schemas/client.schema';
import { MongoDBModule } from './mongodb/mongodb.module'; // Importez MongoDBModule
import { ClientsDao } from './clients.dao';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
    MongoDBModule,
  ],
  providers: [ClientsService, ClientsDao],
  controllers: [ClientsController],
})
export class ClientsModule {}
