import { ClientKafka } from '@nestjs/microservices';
import { ApiGatewayService } from './api-gateway.service';

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
  emit: jest.fn(),
} as unknown as ClientKafka;

export const mockAuthClient = {
  send: jest.fn(() => {
    return {
      subscribe: jest.fn(() => {
        mockBillingClient.emit('order_created', {});
      }),
    };
  }),
} as unknown as ClientKafka;
