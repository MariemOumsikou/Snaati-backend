// src/mongodb/mongodb.module.ts
import { Module } from '@nestjs/common';
import { MongoDBService } from './mongodb.service';

@Module({
  providers: [MongoDBService],
  exports: [MongoDBService], // Exportez MongoDBService pour qu'il soit accessible par d'autres modules
})
export class MongoDBModule {}
