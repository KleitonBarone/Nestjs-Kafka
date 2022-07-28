export class OrderCreatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly userStripeId: string,
    public readonly price: number,
  ) {}
}
