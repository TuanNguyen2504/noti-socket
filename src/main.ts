import { NestFactory } from '@nestjs/core';
import { AppModule } from '~/modules/app.module';
import { BASE_URL, SERVER_PORT } from './constants/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(BASE_URL);
  await app.listen(SERVER_PORT);
}

bootstrap();
