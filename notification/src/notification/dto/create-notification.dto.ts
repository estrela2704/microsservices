// notification.dto.ts

export interface CreateNotificationDto {
  price: number;
  order_uuid: string;
  items: {
    id: number;
    product_uuid: string;
  }[];
  user_uuid: string;
}
