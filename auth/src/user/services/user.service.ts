import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRepository } from '../repositories/impl/UserRepository';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async create(userDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    const userUuid = uuid();

    const newUser = await this.repository.save({
      ...userDto,
      uuid: userUuid,
      password: hashedPassword,
    });

    return newUser;
  }

  async findOneByUuid(uuid: string) {
    const user = await this.repository.findByUuid(uuid);
    if (user) {
      return { message: 'Usuário encontrado no sistema', user: user };
    } else {
      throw new NotFoundException({ message: 'Usuário não encontrado!' });
    }
  }

  findOneByEmail(email: string) {
    return this.repository.findByEmail(email);
  }
}
