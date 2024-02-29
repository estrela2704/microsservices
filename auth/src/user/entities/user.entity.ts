import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 200 })
  public uuid: string;

  @Column({ length: 100 })
  public firstName: string;

  @Column({ length: 100 })
  public lastName: string;

  @Column({ length: 200 })
  public email: string;

  @Column({ length: 200 })
  public password: string;
}
