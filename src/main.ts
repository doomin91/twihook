import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('twihook API')
    .setDescription('twihook Framework')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  // ValidationPipe 사용을 위해 class-transformer 가 필요하다.
  // class-valication 전역 필터 선언
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
