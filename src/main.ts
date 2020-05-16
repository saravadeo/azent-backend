import { NestFactory }          from '@nestjs/core';
import { AppModule }            from 'src/application/app.module';
import { ConfigurationService } from './configuration/configuration.service';

async function bootstrap() {
  const app                  = await NestFactory.create(AppModule);
  const configurationService = app.get<ConfigurationService>(ConfigurationService);
  const applicationPort      = configurationService.getApplicationPort();
  app.enableCors();
  await app.listen(applicationPort);
}
bootstrap();
