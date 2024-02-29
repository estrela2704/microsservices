import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './SQLite/db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductModule,
  ],
})
export class AppModule {}
