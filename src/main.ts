import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Ignorar atributos no presentes en Dto
      forbidNonWhitelisted: true, //Alertar sobre atributos no presentes en Dto
    }),
  );
  await app.listen(3000);
}
bootstrap();
