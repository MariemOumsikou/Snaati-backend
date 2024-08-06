// src/mongodb/mongodb.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { MongoClient, ServerApiVersion } from 'mongodb';

@Injectable()
export class MongoDBService implements OnModuleInit, OnModuleDestroy {
  private client: MongoClient;
  private readonly uri = 'mongodb+srv://user:ZFHKLS8Jktm67YjD@cluster0.jnt4bht.mongodb.net/Snaati?retryWrites=true&w=majority&appName=Cluster0';
  async onModuleInit() {
    this.client = new MongoClient(this.uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    try {
      await this.client.connect();
      await this.client.db('admin').command({ ping: 1 });
      console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  async onModuleDestroy() {
    if (this.client) {
      await this.client.close();
    }
  }

  getClient() {
    return this.client;
  }
}
