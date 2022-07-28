import { Test, TestingModule } from '@nestjs/testing';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';

describe('BillingController', () => {
  let billingController: BillingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BillingController],
      providers: [BillingService],
    }).compile();

    billingController = app.get<BillingController>(BillingController);
  });

  describe('order_created Event', () => {
    it('order_created calls order created handle', () => {
      const result = billingController.handleOrderCreated({
        orderId: '1234',
        userStripeId: '1234',
        price: 100,
      });
      expect(result).toBeCalled();
    });
  });
});
