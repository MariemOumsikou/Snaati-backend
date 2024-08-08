import { Schema, Document } from 'mongoose';

export const ArtisanSchema = new Schema({
    username: String,
    email: String,
    password: String,
    phoneNumber: String,
    activityDescription: String,
});

export interface Artisan extends Document {
    _id: Schema.Types.ObjectId;
    username: string;
    email: string;
    password: string;
    phoneNumber: string;
    activityDescription: string;
}
