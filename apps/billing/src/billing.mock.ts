import { BillingService } from './billing.service';

export const mockBillingService = {
  handleOrderCreated: jest
    .fn()
    .mockReturnValue(
      `Billing user with stripe ID 123 for order 123 with a price of $123`,
    ),
} as unknown as BillingService;
