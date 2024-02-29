import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductRepository } from './repositories/impl/ProductRepository';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductController } from './product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService, ProductRepository],
  controllers: [ProductController],
  exports: [ProductService],
})
export class ProductModule {
  constructor(private dataSource: DataSource) {}
}
