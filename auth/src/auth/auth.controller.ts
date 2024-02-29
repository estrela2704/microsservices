import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';

import { LoginUserDTO } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  @ApiResponse({
    status: 201,
    description: 'O usuário foi salvo com sucesso!.',
  })
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDTO: CreateUserDto) {
    return this.authService.register(createUserDTO);
  }

  @Post('/login')
  @ApiResponse({
    status: 201,
    description: 'O usuário foi autenticado com sucesso!.',
  })
  @ApiBody({ type: LoginUserDTO })
  login(@Body() loginUserDTO: LoginUserDTO) {
    return this.authService.authenticate(loginUserDTO);
  }
}
