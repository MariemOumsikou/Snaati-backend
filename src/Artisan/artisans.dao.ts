// src/artisans/artisans.dao.ts

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Artisan, ArtisanDocument } from "./schemas/artisan.schema";
import { Model } from "mongoose";
import { CreateArtisanDto } from "./dto/create-artisan.dto";

@Injectable()
export class ArtisansDao {
    constructor(@InjectModel(Artisan.name) private artisanModel: Model<ArtisanDocument>) {}

    async find(): Promise<any> {
        return await this.artisanModel.find().exec();
    }

    async create(createArtisanDto: CreateArtisanDto): Promise<Artisan> {
        const createdArtisan = new this.artisanModel(createArtisanDto);
        return await createdArtisan.save();
    }

    async findByUsername(username: string): Promise<Artisan | null> {
        return this.artisanModel.findOne({ username }).exec();
    }

    async findByEmail(email: string): Promise<Artisan | null> {
        return this.artisanModel.findOne({ email }).exec();
    }
}
