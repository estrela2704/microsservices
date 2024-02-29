import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDTO {
  @ApiProperty()
  @IsString({ message: 'O campo email deve ser uma string' })
  @IsEmail(
    {},
    { message: 'O campo email deve ser um endereço de e-mail válido' },
  )
  @IsNotEmpty({ message: 'O campo email não pode estar vazio' })
  email: string;

  @ApiProperty()
  @IsString({ message: 'O campo password deve ser uma string' })
  @IsNotEmpty({ message: 'O campo password não pode estar vazio' })
  password: string;
}
