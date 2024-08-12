// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuration des CORS
  app.enableCors({
    origin: 'http://localhost:3001', // URL du frontend
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type',
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions:{
        enableImplicitConversion: true
      },
      validateCustomDecorators: true
    })
  )

  await app.listen(3000);
}
bootstrap();
