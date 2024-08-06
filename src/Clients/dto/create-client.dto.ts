import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, { message: 'Password too weak' })
  password: string;
}