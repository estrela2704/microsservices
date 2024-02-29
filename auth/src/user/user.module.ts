import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/impl/UserRepository';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserRepository],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {
  constructor(private dataSource: DataSource) {}
}
