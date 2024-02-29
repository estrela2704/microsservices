import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDTO } from '../dto/create-product.dto';
import { ProductRepository } from '../repositories/impl/ProductRepository';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductService {
  constructor(private readonly repository: ProductRepository) {}

  async create(dto: CreateProductDTO) {
    const productUuid = uuid();

    const newProduct = await this.repository.save({
      ...dto,
      uuid: productUuid,
    });

    return newProduct;
  }

  async findAll() {
    const products = await this.repository.findAll();
    if (products.length > 0) {
      return { products: products };
    } else {
      throw new NotFoundException('Não há nenhum produto cadastrado!');
    }
  }

  async findOneByUuid(uuid: string) {
    const product = await this.repository.findByUuid(uuid);
    if (product) {
      return { message: 'Produto encontrado no sistema', product: product };
    } else {
      throw new NotFoundException({ message: 'Produto não encontrado!' });
    }
  }
}
