import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RabbitMQConsumerService } from './notification/services/RabbitMQConsumer.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const rabbitMQConsumerService = app.get(RabbitMQConsumerService);
  await rabbitMQConsumerService.consumeMessages();
  await app.listen(3004);
}
bootstrap();
