import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  order_uuid: string;

  @Column()
  order_price: number;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  payment_date: Date;
}
