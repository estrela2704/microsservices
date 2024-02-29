import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 200 })
  public uuid: string;

  @Column({ length: 100 })
  public name: string;

  @Column()
  public price: number;
}
