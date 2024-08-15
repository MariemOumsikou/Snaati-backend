// src/clients/clients.controller.ts

import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { ClientsService } from './clients.service'; // Correction du nom de la classe
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './schemas/client.schema';

@Controller('api/clients') // Correction de l'URL du contrôleur
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) {} // Correction du nom de la variable

    @Post()
    async create(@Body() createClientDto: CreateClientDto): Promise<Client> {
        return this.clientsService.create(createClientDto);
    }

    @Get()
    async findAll(): Promise<Client[]> {
        return this.clientsService.findAll();
    }

    @Post('login')
    async login(@Body() credentials: { username: string; password: string }): Promise<{ success: boolean; message: string; client?: Client }> {
        return this.clientsService.login(credentials);
    }

    @Get('/id-by-username/:username')
    async getClientIdByUsername(@Param('username') username: string) {
        const clientId = await this.clientsService.getClientIdByUsername(username);
        if (!clientId) {
            throw new NotFoundException('Client non trouvé');
        }
        return { ClientId: clientId };
    }

    @Get()
    async findByEmail(@Query('email') email: string) {
      return this.clientsService.findByEmail(email);
    }
    @Get('name')
    async getClientName(@Query('email') email: string): Promise<{ name: string | null }> {
        const name = await this.clientsService.getClientNameByEmail(email);
        return { name };
    }
}
