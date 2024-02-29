import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { UserService } from 'src/user/services/user.service';
import { LoginUserDTO } from '../dto/login-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(createUserDTO: CreateUserDto) {
    const user = await this.userService.findOneByEmail(createUserDTO.email);
    if (createUserDTO.password !== createUserDTO.confirmpassword) {
      throw new BadRequestException(
        'A senha e a confirmação de senha não coincidem',
      );
    }
    if (user) {
      throw new ConflictException('E-mail já em uso');
    }
    return await this.userService.create(createUserDTO);
  }

  async authenticate(loginUserDTO: LoginUserDTO) {
    const user = await this.userService.findOneByEmail(loginUserDTO.email);
    if (!user) {
      throw new NotFoundException('Nenhum usuário cadastrado com esse e-mail');
    }
    const isMatch = await bcrypt.compare(loginUserDTO.password, user.password);
    if (!isMatch) {
      throw new BadRequestException('E-mail ou senha incorretos!');
    } else {
      return {
        message: 'Você está logado!',
        user: {
          id: user.uuid,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      };
    }
  }
}
