import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class Conclude_orderDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  order_uuid: string;
}
