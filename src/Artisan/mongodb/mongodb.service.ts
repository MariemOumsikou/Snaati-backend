// src/mongodb/mongodb.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { MongoClient, ServerApiVersion } from 'mongodb';

@Injectable()
export class MongoDBService implements OnModuleInit, OnModuleDestroy {
  private artisan: MongoClient;
  private readonly uri = 'mongodb+srv://user:ZFHKLS8Jktm67YjD@cluster0.jnt4bht.mongodb.net/Snaati?retryWrites=true&w=majority&appName=Cluster0';
  async onModuleInit() {
    this.artisan = new MongoClient(this.uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    try {
      await this.artisan.connect();
      await this.artisan.db('admin').command({ ping: 1 });
      console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  async onModuleDestroy() {
    if (this.artisan) {
      await this.artisan.close();
    }
  }

  getArtisan() {
    return this.artisan;
  }
}
