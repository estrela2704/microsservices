import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './services/payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'O pagamento foi concluido!',
  })
  @ApiBody({ type: CreatePaymentDto })
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }
}
