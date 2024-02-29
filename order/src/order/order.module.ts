import { Module } from '@nestjs/common';
import { OrderService } from './services/order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from './repositories/impl/OrderRepository';
import { OrderItemRepository } from './repositories/impl/OrderItemRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem])],

  controllers: [OrderController],
  providers: [OrderService, OrderRepository, OrderItemRepository],
})
export class OrderModule {}
