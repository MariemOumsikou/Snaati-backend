// dto/create-comment.dto.ts
import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  clientEmail: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsDate()
  date: Date;
}
