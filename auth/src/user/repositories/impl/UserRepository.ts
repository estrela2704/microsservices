import { User } from '../../entities/user.entity';
import { IUserRepository, IUserDATA } from '../IUserRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async save(userData: IUserDATA): Promise<User> {
    const newUser = this.userRepository.create(userData);

    return await this.userRepository.save(newUser);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email: email } });
  }
  async findByUuid(uuid: string): Promise<User> {
    return await this.userRepository.findOne({
      select: ['firstName', 'lastName', 'uuid', 'email'],
      where: { uuid: uuid },
    });
  }
  async update(user: User): Promise<User> {
    return user;
  }
  async delete(user: User): Promise<User> {
    return user;
  }
}
