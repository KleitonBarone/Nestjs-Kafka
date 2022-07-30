import { v4 as uuidv4 } from 'uuid';

import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderRequest } from './create-order-request.dto';
import { GetUserRequest } from './get-user-request.dto';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class ApiGatewayService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  getHealth(): { status: string } {
    return { status: 'OK' };
  }

  createOrder({ userId, price }: CreateOrderRequest): { status: string } {
    const authObservable = this.authClient.send(
      'get_user',
      new GetUserRequest(userId),
    );

    authObservable.subscribe((user) => {
      this.billingClient.emit(
        'order_created',
        new OrderCreatedEvent(uuidv4(), user.stripeId, price),
      );
    });

    return { status: 'SENT' };
  }
}
