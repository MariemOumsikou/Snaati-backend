// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule } from './clients/clients.module';
import { ArtisansModule } from './artisan/artisan.module';
import { CategoryModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(), // Charge les variables d'environnement
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    ClientsModule,
    ArtisansModule,
    CategoryModule,
    ProductsModule,
  ],
  providers:[AppService],
  controllers:[AppController]
})
export class AppModule {}