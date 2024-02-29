import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { PaymentModule } from './payment/payment.module';
config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './SQLite/db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PaymentModule,
  ],
})
export class AppModule {}
