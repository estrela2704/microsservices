import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { OrderService } from './services/order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Conclude_orderDTO } from './dto/conclude-order.dto';
import { addItemDTO } from './dto/add-order-item.dto';
import { ApiParam, ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/')
  @ApiResponse({
    status: 200,
    description: 'Retorna todas as ordens de compra.',
  })
  getAllOrders() {
    return this.orderService.findAll();
  }

  @Get('/:order_uuid')
  @ApiResponse({
    status: 200,
    description: 'Retorna dados de uma ordem de compra.',
  })
  @ApiParam({
    name: 'order_uuid',
    description: 'Identificador(uuid) da ordem de compra.',
  })
  getOrderWithItems(@Param('order_uuid') orderUuid: string) {
    return this.orderService.findAllWithItems(orderUuid);
  }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'O a ordem de compra foi salva com sucesso!',
  })
  @ApiBody({ type: CreateOrderDto })
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Post('/conclude')
  @ApiResponse({
    status: 201,
    description: 'O a ordem de compra foi concluida com sucesso!',
  })
  @ApiBody({ type: Conclude_orderDTO })
  concludeOrder(@Body() conclude_orderDTO: Conclude_orderDTO) {
    return this.orderService.conclude_order(conclude_orderDTO);
  }

  @Post('/item/add')
  @ApiResponse({
    status: 201,
    description: 'O produto foi adicionado a ordem de compra!',
  })
  @ApiBody({ type: addItemDTO })
  add_order_item(@Body() additemDTO: addItemDTO) {
    return this.orderService.addOrderItem(additemDTO);
  }

  @ApiResponse({
    status: 201,
    description: 'O produto foi removido a ordem de compra!',
  })
  @ApiParam({
    name: 'order_uuid',
    description: 'Identificador(uuid) da ordem de compra.',
  })
  @ApiParam({
    name: 'item_uuid',
    description: 'Identificador(uuid) da produto.',
  })
  @Delete('/:order_uuid/item/:item_uuid')
  remove_order_item(
    @Param('order_uuid') orderUuid: string,
    @Param('item_uuid') item_uuid: string,
  ) {
    return this.orderService.removeOrderItem(orderUuid, item_uuid);
  }
}
