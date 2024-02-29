import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './services/user.service';
import { ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna dados de um usuário.',
  })
  @ApiParam({ name: 'id', description: 'Identificador(uuid) do usuário.' })
  findOne(@Param('id') id: string) {
    return this.userService.findOneByUuid(id);
  }
}
