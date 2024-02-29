import { Module } from '@nestjs/common';
import { PaymentService } from './services/payment.service';
import { PaymentController } from './payment.controller';
import { PaymentRepository } from './repositories/impl/PaymentRepository';
import { Payment } from './entities/payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RabbitMQService } from './services/RabbitMQService';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  controllers: [PaymentController],
  providers: [PaymentService, PaymentRepository, RabbitMQService],
})
export class PaymentModule {}
