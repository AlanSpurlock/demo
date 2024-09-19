import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: false,
    logger: ['error', 'warn', 'log'],
  });
  await app.listen(3000);
}

bootstrap();
