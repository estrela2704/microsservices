import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import axios from 'axios';
import { PaymentRepository } from '../repositories/impl/PaymentRepository';
import { RabbitMQService } from './RabbitMQService';

@Injectable()
export class PaymentService {
  constructor(
    private readonly repository: PaymentRepository,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  private async getOrder(orderUuid: string) {
    try {
      const response = await axios.get(
        `http://${process.env.ORDER_API_URL}/order/${orderUuid}`,
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new NotFoundException('Ordem de compra não encontrada!');
      } else {
        throw new InternalServerErrorException(
          `Algo de errado aconteceu, por favor tente novamente mais tarde! ${error}`,
        );
      }
    }
  }

  private async concludeOrder(orderUuid: string) {
    try {
      await axios.post(`http://${process.env.ORDER_API_URL}/order/conclude`, {
        order_uuid: orderUuid,
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new NotFoundException('Ordem de compra não encontrada!');
      } else {
        throw new InternalServerErrorException(
          `Algo de errado aconteceu, por favor tente novamente mais tarde! ${error}`,
        );
      }
    }
  }

  private async getProduct(productUuid: string) {
    try {
      const product = await axios.get(
        `http://${process.env.PRODUCT_API_URL}/product/${productUuid}`,
      );

      return product;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new BadRequestException('Item de compra não encontrado!');
      } else {
        throw new InternalServerErrorException(
          `Algo de errado aconteceu, por favor tente novamente mais tarde! ${error}`,
        );
      }
    }
  }

  async create(createPaymentDto: CreatePaymentDto) {
    try {
      const response = await this.getOrder(createPaymentDto.order_uuid);
      const order = response[0];
      let orderStatus: string;
      if (order) {
        orderStatus = order.status;
      }

      if (orderStatus == 'PAYED') {
        throw new BadRequestException('Ordem de compra já paga');
      }

      let total_value: number = 0;

      if (order.items.length == 0) {
        throw new BadRequestException(
          'Adicione items na ordem de compra para efetuar o pagamento!',
        );
      }

      for (const item of order.items) {
        const product = await this.getProduct(item.product_uuid);
        const product_price = product.data.product.price;
        total_value += product_price;
      }

      await this.concludeOrder(createPaymentDto.order_uuid);

      const message = {
        price: total_value,
        order_uuid: order.order_uuid,
        items: order.items,
        user_uuid: order.user_uuid,
      };
      await this.rabbitMQService.sendMessage(message);

      return await this.repository.save({
        ...createPaymentDto,
        order_price: total_value,
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
