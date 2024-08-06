// segment.dao.ts

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Client, ClientDocument } from "./schemas/client.schema";
import { Model } from "mongoose";
import { CreateClientDto } from "./dto/create-client.dto";


@Injectable()
export class ClientsDao {
    constructor(@InjectModel(Client.name) private clientModel: Model<ClientDocument>) {}
    
    async find(): Promise<any> {
        return await this.clientModel.find().exec();
    }
    async create(createClientDto: CreateClientDto): Promise<Client> {
    const createdClient = new this.clientModel(createClientDto);
    return await createdClient.save();
  }



}