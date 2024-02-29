import { Payment } from 'src/payment/entities/payment.entity';
import { IPayment, IPaymentRepository } from '../IPaymentRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentRepository implements IPaymentRepository {
  constructor(
    @InjectRepository(Payment)
    private readonly repository: Repository<Payment>,
  ) {}

  async save(paymamentData: IPayment): Promise<Payment> {
    const newPayment = this.repository.create(paymamentData);

    return await this.repository.save(newPayment);
  }
}
