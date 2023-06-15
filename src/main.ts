import { NestFactory } from '@nestjs/core';
import { MassagesModule } from './massages/massages.module';


async function bootstrap() {
  const app = await NestFactory.create(MassagesModule);
  await app.listen(3000);
}
bootstrap();
