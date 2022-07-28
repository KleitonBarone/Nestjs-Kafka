import { Test, TestingModule } from '@nestjs/testing';
import { ApiGatewayController } from './api-gateway.controller';
import { mockApiGatewayService, mockAuthService } from './api-gateway.mock';
import { ApiGatewayService } from './api-gateway.service';

describe('ApiGatewayController', () => {
  let apiGatewayController: ApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiGatewayController],
      providers: [
        {
          provide: ApiGatewayService,
          useValue: mockApiGatewayService,
        },
        {
          provide: 'AUTH_SERVICE',
          useValue: mockAuthService,
        },
      ],
    }).compile();

    apiGatewayController = app.get<ApiGatewayController>(ApiGatewayController);
  });

  describe('Health Endpoint', () => {
    it('should return OK Status', () => {
      expect(apiGatewayController.getHealth()).toEqual({ status: 'OK' });
    });
  });

  describe('Bill Charge Endpoint', () => {
    it('should return SENT Status', () => {
      const result = apiGatewayController.createOrder({
        userId: 'userId',
        price: 100,
      });

      expect(result).toEqual({ status: 'SENT' });
    });
  });
});
