// src/artisans/artisans.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtisansService } from './artisans.service';
import { ArtisansController } from './artisans.controller';
import { Artisan, ArtisanSchema } from './schemas/artisan.schema';
import { MongoDBModule } from './mongodb/mongodb.module';
import { ArtisansDao } from './artisans.dao';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Artisan.name, schema: ArtisanSchema }]),
  ],
  providers: [ArtisansService, ArtisansDao],
  controllers: [ArtisansController],
})
export class ArtisansModule {}
