import { Payment } from '../entities/payment.entity';
export interface IPaymentRepository {
  save(order: IPayment): Promise<Payment>;
}

export interface IPayment {
  order_uuid: string;

  order_price: number;
}
