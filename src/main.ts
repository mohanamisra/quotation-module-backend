import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:5173',
      'https://quotation-module-frontend.vercel.app',
    ],
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
