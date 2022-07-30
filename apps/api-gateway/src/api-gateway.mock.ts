import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { ApiGatewayService } from './api-gateway.service';
import { GetUserRequest } from './get-user-request.dto';
import { OrderCreatedEvent } from './order-created.event';

export const mockApiGatewayService = {
  getHealth: jest.fn().mockReturnValue({
    status: 'OK',
  }),
  createOrder: jest.fn().mockReturnValue({
    status: 'SENT',
  }),
} as unknown as ApiGatewayService;

export const mockAuthService = {
  subscribeToResponseOf: jest.fn(),
} as unknown as ClientKafka;

export const mockBillingClient = {
  emit: jest.fn((topic, data) => {
    return { topic, data };
  }),
} as unknown as ClientKafka;

export const mockAuthClient = {
  send: jest.fn(() => {
    new GetUserRequest('123').toString();
    return mockObservable;
  }),
} as unknown as ClientKafka;

export const mockObservable = {
  subscribe: jest.fn((user) => {
    mockBillingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', user.stripeId, 100),
    );
  }),
} as unknown as Observable<any>;
