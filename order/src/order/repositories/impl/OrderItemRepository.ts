import { OrderItem } from 'src/order/entities/order-item.entity';
import { IOrderItem, IOrderItemRepository } from '../IOrderItemRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';

@Injectable()
export class OrderItemRepository implements IOrderItemRepository {
  constructor(
    @InjectRepository(OrderItem)
    private readonly repository: Repository<OrderItem>,
  ) {}

  async save(orderItemData: IOrderItem): Promise<OrderItem> {
    const newOrderItem = this.repository.create(orderItemData);
    return await this.repository.save(newOrderItem);
  }

  async findByID(id: number): Promise<OrderItem> {
    return await this.repository.findOne({
      select: ['id', 'product_uuid', 'order'],
      where: { id: id },
    });
  }

  async delete(orderItem: OrderItem): Promise<OrderItem> {
    return await this.repository.remove(orderItem);
  }

  async findOrderByUuids(order: Order, product_uuid): Promise<OrderItem> {
    return await this.repository.findOne({
      select: ['id', 'order', 'product_uuid'],
      where: { order: order, product_uuid: product_uuid },
    });
  }
}
