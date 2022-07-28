import { Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class BillingService {
  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent): string {
    const billingMessage = `Billing user with stripe ID ${orderCreatedEvent.userStripeId} for order ${orderCreatedEvent.orderId} with a price of $${orderCreatedEvent.price}`;
    console.log(billingMessage);
    return billingMessage;
  }
}
