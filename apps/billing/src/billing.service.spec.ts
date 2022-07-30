import { BillingService } from './billing.service';
import { OrderCreatedEvent } from './order-created.event';

describe('BillingService', () => {
  let billingService: BillingService;

  beforeEach(async () => {
    billingService = new BillingService();
  });

  describe('handleOrderCreated Method', () => {
    it('should return Message', () => {
      const data = new OrderCreatedEvent('123', '43324', 100);
      const result = billingService.handleOrderCreated(data);

      expect(result).toBe(
        `Billing user with stripe ID ${data.userStripeId} for order ${data.orderId} with a price of $${data.price}`,
      );
    });
  });
});
