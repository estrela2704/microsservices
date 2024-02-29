import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';

@Injectable()
export class RabbitMQService {
  private readonly rabbitMQUrl: string = 'amqp://guest:guest@localhost';
  private readonly queueName: string = 'notification_queue';

  async sendMessage(message: any): Promise<void> {
    try {
      const connection = await amqp.connect(this.rabbitMQUrl);
      const channel = await connection.createChannel();
      await channel.assertQueue(this.queueName);
      await channel.sendToQueue(
        this.queueName,
        Buffer.from(JSON.stringify(message)),
      );
      console.log(`Mensagem enviada para a fila: ${JSON.stringify(message)}`);
      await channel.close();
      await connection.close();
    } catch (error) {
      console.error(`Erro ao enviar mensagem para a fila: ${error.message}`);
    }
  }
}
