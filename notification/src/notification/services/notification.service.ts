import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from '../dto/create-notification.dto';
import { EmailService } from './Email.service';
import axios from 'axios';

@Injectable()
export class NotificationService {
  constructor(private readonly emailService: EmailService) {}

  async getUserNameAndEmail(
    uuid: string,
  ): Promise<{ userName: string; userEmail: string }> {
    try {
      const response = await axios.get(`http://localhost:3000/user/${uuid}`);
      const user = response.data.user;
      const data = {
        userName: `${user.firstName} ${user.lastName}`,
        userEmail: user.email,
      };

      return data;
    } catch (error) {
      throw new Error(
        `Algo de errado aconteceu, por favor tente novamente mais tarde! ${error}`,
      );
    }
  }

  async getProduct(uuid: string) {
    try {
      const product = await axios.get(`http://localhost:3001/product/${uuid}`);

      return product;
    } catch (error) {
      throw new Error(
        `Algo de errado aconteceu, por favor tente novamente mais tarde! ${error}`,
      );
    }
  }

  async create(createNotificationDto: CreateNotificationDto) {
    const products: any[] = [];
    for (const item of createNotificationDto.items) {
      const product = await this.getProduct(item.product_uuid);
      const productData = {
        name: product.data.product.name,
        price: product.data.product.price,
      };
      products.push(productData);
    }
    const user = await this.getUserNameAndEmail(
      createNotificationDto.user_uuid,
    );
    const totalPrice = createNotificationDto.price;

    return await this.emailService.sendEmail(
      user.userEmail,
      user.userName,
      products,
      totalPrice,
    );
  }
}
