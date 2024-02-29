import { Product } from 'src/product/entities/product.entity';
import { IProductRepository, IProductDATA } from '../IProductRepository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async save(productData: IProductDATA): Promise<Product> {
    const newProduct = this.productRepository.create(productData);

    return await this.productRepository.save(newProduct);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findByUuid(uuid: string): Promise<Product> {
    return await this.productRepository.findOne({
      select: ['uuid', 'name', 'price'],
      where: { uuid: uuid },
    });
  }
}
