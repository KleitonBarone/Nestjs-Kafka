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
