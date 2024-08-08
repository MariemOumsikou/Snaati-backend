// src/clients/dto/create-client.dto.ts

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
