import { User } from '../entities/user.entity';

export interface IUserRepository {
  save(userData: IUserDATA): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findByUuid(uuid: string): Promise<User>;
  update(user: User): Promise<User>;
  delete(user: User): Promise<User>;
}

export interface IUserDATA {
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
