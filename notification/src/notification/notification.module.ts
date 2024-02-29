import { Module } from '@nestjs/common';
import { NotificationService } from './services/notification.service';
import { RabbitMQConsumerService } from './services/RabbitMQConsumer.service';
import { EmailService } from './services/Email.service';

@Module({
  providers: [NotificationService, RabbitMQConsumerService, EmailService],
  exports: [NotificationService],
})
export class NotificationModule {}
