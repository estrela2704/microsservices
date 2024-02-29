import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  order_uuid: string;
}
