import { IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class CreateArtisanDto {
  @IsString()
 _id: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  activityDescription: string;
}