import { Document } from 'mongoose';

export interface Client extends Document {
  readonly username: string;
  readonly email: string;
  readonly password: string;
}