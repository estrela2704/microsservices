import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OrderItem } from './order-item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false, unique: true })
  order_uuid: string;

  @Column({ nullable: false })
  public user_uuid: string;

  @Column({
    default: 'SHIPPING_CART',
  })
  public status: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  items: OrderItem[];
}
