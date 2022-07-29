import { mockAuthClient, mockBillingClient } from './api-gateway.mock';
import { ApiGatewayService } from './api-gateway.service';

describe('ApiGatewayService', () => {
  let apiGatewayService: ApiGatewayService;

  beforeEach(async () => {
    apiGatewayService = new ApiGatewayService(
      mockBillingClient,
      mockAuthClient,
    );
  });

  describe('getHealth Method', () => {
    it('should return OK Status', () => {
      expect(apiGatewayService.getHealth()).toEqual({ status: 'OK' });
    });
  });

  describe('createOrder Method', () => {
    it('should return SENT Status', () => {
      const data = { userId: '1234', price: 100 };
      const result = apiGatewayService.createOrder(data);

      expect(mockAuthClient.send).toBeCalled();
      expect(mockBillingClient.emit).toBeCalled();
      expect(result).toEqual({ status: 'SENT' });
    });
  });
});
