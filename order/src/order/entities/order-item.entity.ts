import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public product_uuid: string;

  @ManyToOne(() => Order, (order) => order.items, { nullable: false })
  order: Order;
}
