import { Product } from '../entities/product.entity';

export interface IProductRepository {
  save(product: IProductDATA): Promise<Product>;
  findAll(): Promise<Product[]>;
  findByUuid(uuid: string): Promise<Product>;
}

export interface IProductDATA {
  uuid: string;
  name: string;
  price: number;
}
