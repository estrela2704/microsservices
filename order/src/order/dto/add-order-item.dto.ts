import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class addItemDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  product_uuid: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  order_uuid: string;
}
