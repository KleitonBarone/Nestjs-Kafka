export class OrderCreatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly userStripeId: string,
    public readonly price: number,
  ) {}

  toString(): string {
    return JSON.stringify({
      orderId: this.orderId,
      userStripeId: this.userStripeId,
      price: this.price,
    });
  }
}
