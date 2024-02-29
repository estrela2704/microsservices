import { Order } from 'src/order/entities/order.entity';
import { IOrder, IOrderRepository } from '../IOrderRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderRepository implements IOrderRepository {
  constructor(
    @InjectRepository(Order)
    private readonly repository: Repository<Order>,
  ) {}

  async save(orderData: IOrder): Promise<Order> {
    const newOrder = this.repository.create(orderData);

    return await this.repository.save(newOrder);
  }

  async findAll(): Promise<Order[]> {
    return await this.repository.find();
  }

  async findByUuid(uuid: string): Promise<Order> {
    return await this.repository.findOne({
      select: ['id', 'order_uuid', 'user_uuid', 'status', 'items'],
      where: { order_uuid: uuid },
    });
  }

  async findActiveUserOrders(uuid: string): Promise<Order> {
    return await this.repository.findOne({
      select: ['order_uuid', 'user_uuid', 'status', 'items'],
      where: { user_uuid: uuid, status: 'SHIPPING_CART' },
    });
  }

  async findWithItem(orderUuid: string) {
    return await this.repository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.items', 'item')
      .where('order.order_uuid = :orderUuid', { orderUuid })
      .getMany();
  }

  async update(order: Order): Promise<Order> {
    return await this.repository.save(order);
  }
}
