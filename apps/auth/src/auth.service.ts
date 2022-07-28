import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AuthService {
  private readonly users: any[] = [
    {
      userId: '123',
      stripeId: '43324',
    },
    {
      userId: '345',
      stripeId: '249309',
    },
  ];

  getUser(getUserRequest: GetUserRequest): string {
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
