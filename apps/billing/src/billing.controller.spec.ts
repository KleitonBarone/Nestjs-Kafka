import { Test, TestingModule } from '@nestjs/testing';
import { BillingController } from './billing.controller';
import { mockBillingService } from './billing.mock';
import { BillingService } from './billing.service';

describe('BillingController', () => {
  let billingController: BillingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BillingController],
      providers: [
        {
          provide: BillingService,
          useValue: mockBillingService,
        },
      ],
    }).compile();

    billingController = app.get<BillingController>(BillingController);
  });

  describe('order_created Event', () => {
    it('order_created calls order created handle', () => {
      const data = {
        orderId: '123',
        userStripeId: '123',
        price: 123,
      };
      billingController.handleOrderCreated(data);
      expect(mockBillingService.handleOrderCreated).toBeCalledWith(data);
    });
  });
});
