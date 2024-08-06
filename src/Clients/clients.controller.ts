// src/clients/clients.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('api/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto): Promise<any> {
    return await this.clientsService.create(createClientDto);
  }
  @Get()
  async findAll():Promise<any>{
    return await this.clientsService.findAll();
  }
}
