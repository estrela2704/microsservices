import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDTO {
  @ApiProperty()
  @IsString({ message: 'O campo name deve ser uma string' })
  @IsNotEmpty({ message: 'O campo name não pode estar vazio' })
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty({ message: 'O campo price não pode estar vazio' })
  price: number;
}
