import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { BillingService } from './billing.service';

@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @EventPattern('order_created')
  handleOrderCreated(data: any): void {
    this.billingService.handleOrderCreated(data);
  }
}
