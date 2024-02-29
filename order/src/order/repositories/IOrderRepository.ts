import { Order } from '../entities/order.entity';

export interface IOrderRepository {
  save(order: IOrder): Promise<Order>;
  findAll(): Promise<Order[]>;
  findByUuid(uuid: string): Promise<Order>;
}

export interface IOrder {
  user_uuid: string;
  order_uuid: string;
}
