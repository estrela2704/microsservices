import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  user_uuid: string;
}
