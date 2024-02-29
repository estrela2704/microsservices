import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as ejs from 'ejs';
import * as fs from 'fs';

@Injectable()
export class EmailService {
  private readonly transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      // Configure o seu provedor de e-mail aqui
      service: 'gmail',
      auth: {
        user: 'felipenestjs@gmail.com',
        pass: 'epapzemrpwsftjco',
      },
    });
  }

  async sendEmail(
    email: string,
    userName: string,
    products: any[],
    totalPrice: number,
  ): Promise<void> {
    try {
      const template = fs.readFileSync(
        'src/notification/email/email-template.ejs',
        'utf-8',
      );
      const compiledTemplate = ejs.compile(template);
      const html = compiledTemplate({ userName, products, totalPrice });

      console.log(email, userName, products, totalPrice);

      const mailOptions = {
        from: 'felipenestjs@gmail.com',
        to: email,
        subject: 'Ordem de compra finalizada!',
        html: html,
      };

      await this.transporter.sendMail(mailOptions);
      console.log('E-mail enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
    }
  }
}
