import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from '~/modules/app.module';
import { Logger } from './configs/logger';
import { BASE_URL, SERVER_PORT } from './constants/common';
import { AuthGuard } from './guard/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: new Logger('SYSTEM') });

  app.setGlobalPrefix(BASE_URL);
  app.useGlobalGuards(new AuthGuard());

  await app.listen(SERVER_PORT);
}

bootstrap();
