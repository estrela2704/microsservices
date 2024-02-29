import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';
import { NotificationService } from './notification.service';

@Injectable()
export class RabbitMQConsumerService {
  private readonly rabbitMQUrl: string = 'amqp://guest:guest@localhost';
  private readonly queueName: string = 'notification_queue';

  constructor(private readonly notificationService: NotificationService) {}

  async consumeMessages(): Promise<void> {
    try {
      const connection = await amqp.connect(this.rabbitMQUrl);
      const channel = await connection.createChannel();
      await channel.assertQueue(this.queueName);
      console.log(`Consumidor conectado à fila: ${this.queueName}`);

      await channel.consume(this.queueName, async (message) => {
        if (message !== null) {
          const content = JSON.parse(message.content.toString());
          console.log(`Mensagem recebida: ${JSON.stringify(content)}`);
          await this.notificationService.create(content);
          channel.ack(message);
        }
      });

      process.on('SIGINT', () => {
        connection.close();
        process.exit(0);
      });
    } catch (error) {
      console.error(`Erro ao consumir mensagens da fila: ${error.message}`);
    }
  }
}
