import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Conclude_orderDTO } from '../dto/conclude-order.dto';
import { CreateOrderDto } from '../dto/create-order.dto';
import axios from 'axios';
import { OrderRepository } from '../repositories/impl/OrderRepository';
import { OrderItemRepository } from '../repositories/impl/OrderItemRepository';
import { v4 as uuid } from 'uuid';
import { addItemDTO } from '../dto/add-order-item.dto';
import { IOrderItem } from '../repositories/IOrderItemRepository';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly orderItemRepository: OrderItemRepository,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    try {
      await axios.get(
        `http://${process.env.AUTH_API_URL}/user/${createOrderDto.user_uuid}`,
      );
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new BadRequestException('Usuário com este id não foi encontrado');
      } else {
        throw new InternalServerErrorException(
          'Algo de errado aconteceu, por favor tente novamente mais tarde!',
        );
      }
    }

    const userHaveActiveOrder = await this.orderRepository.findActiveUserOrders(
      createOrderDto.user_uuid,
    );

    if (userHaveActiveOrder) {
      throw new BadRequestException(
        'Este usuário já possui uma ordem de compra em andamento',
      );
    }

    const orderUuid = uuid();

    return await this.orderRepository.save({
      ...createOrderDto,
      order_uuid: orderUuid,
    });
  }

  async findAll() {
    return await this.orderRepository.findAll();
  }

  async findAllWithItems(orderUuid: string) {
    const order = await this.orderRepository.findWithItem(orderUuid);
    if (order.length == 0) {
      throw new NotFoundException('Ordem de compra não encontrada');
    } else {
      return order;
    }
  }

  async addOrderItem(addDTO: addItemDTO) {
    const order = await this.orderRepository.findByUuid(addDTO.order_uuid);

    if (!order) {
      throw new NotFoundException('Ordem de compra não encontrada');
    }

    if (order.status == 'PAYED') {
      throw new BadRequestException(
        'Esta ordem de compra já foi paga e não pode mais ser alterada',
      );
    }

    try {
      await axios.get(
        `http://${process.env.PRODUCT_API_URL}/product/${addDTO.product_uuid}`,
      );
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new BadRequestException('Produto com este id não foi encontrado');
      } else {
        throw new InternalServerErrorException(
          'Algo de errado aconteceu, por favor tente novamente mais tarde!',
        );
      }
    }

    const ordemItemDTO = {
      product_uuid: addDTO.product_uuid,
      order: order,
    };
    return await this.orderItemRepository.save(ordemItemDTO);
  }

  async removeOrderItem(orderUuid: string, product_uuid: string) {
    const order = await this.orderRepository.findByUuid(orderUuid);

    if (!order) {
      throw new BadRequestException('Ordem de compra não encontrada');
    }

    if (order.status == 'PAYED') {
      throw new BadRequestException(
        'Esta ordem de compra já foi paga e não pode mais ser alterada',
      );
    }

    try {
      await axios.get(
        `http://${process.env.PRODUCT_API_URL}/product/${product_uuid}`,
      );
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new BadRequestException('Produto com este id não foi encontrado');
      } else {
        throw new InternalServerErrorException(
          'Algo de errado aconteceu, por favor tente novamente mais tarde!',
        );
      }
    }

    const ordemItem = await this.orderItemRepository.findOrderByUuids(
      order,
      product_uuid,
    );

    if (!ordemItem) {
      throw new BadRequestException(
        'Não há um produto com este id nesta ordem de compra!',
      );
    }

    return await this.orderItemRepository.delete(ordemItem);
  }

  async conclude_order(conclude_orderDTO: Conclude_orderDTO) {
    const order = await this.orderRepository.findByUuid(
      conclude_orderDTO.order_uuid,
    );

    if (!order) {
      throw new NotFoundException('Ordem de compra não encontrada!');
    }

    if (order.status !== 'PAYED') {
      order.status = 'PAYED';
    } else {
      throw new BadRequestException('Esta ordem de compra já foi paga!');
    }

    return this.orderRepository.update(order);
  }
}
