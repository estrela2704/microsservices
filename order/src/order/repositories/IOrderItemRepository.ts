import { OrderItem } from '../entities/order-item.entity';
import { Order } from '../entities/order.entity';

export interface IOrderItemRepository {
  save(order: IOrderItem): Promise<OrderItem>;
  findByID(id: number): Promise<OrderItem>;
  delete(orderItem: OrderItem): Promise<OrderItem>;
}

export interface IOrderItem {
  product_uuid: string;
  order: Order;
}
