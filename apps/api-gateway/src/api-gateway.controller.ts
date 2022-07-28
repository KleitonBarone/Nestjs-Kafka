import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Post,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { ApiGatewayService } from './api-gateway.service';
import { CreateOrderRequest } from './create-order-request.dto';

@Controller()
export class ApiGatewayController implements OnModuleInit {
  constructor(
    private readonly apiGatewayService: ApiGatewayService,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  @Get()
  getHealth(): {
    status: string;
  } {
    return this.apiGatewayService.getHealth();
  }

  @Post()
  createOrder(@Body() createOrderRequest: CreateOrderRequest): {
    status: string;
  } {
    return this.apiGatewayService.createOrder(createOrderRequest);
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}
