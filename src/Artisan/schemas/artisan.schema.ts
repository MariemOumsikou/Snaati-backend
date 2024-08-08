import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArtisanDocument = Artisan & Document;

@Schema()
export class Artisan {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  activityDescription: string;
    _id: any;
}

export const ArtisanSchema = SchemaFactory.createForClass(Artisan);