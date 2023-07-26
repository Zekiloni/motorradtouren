import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';

async function bootstrap() {
  dotenv.config();

  const port = process.env.APP_PORT || 3000;
  console.log(process.env.DB_URI)

  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
