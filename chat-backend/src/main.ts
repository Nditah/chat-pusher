import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000', // react
      'http://localhost:8080', // vue
      'http://localhost:4200', // angular
    ],
  });
  await app.listen(8000);
}
bootstrap();
