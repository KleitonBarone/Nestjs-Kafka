import { AuthService } from './auth.service';

export const mockAuthService = {
  getUser: jest.fn().mockReturnValue({
    userId: '123',
    stripeId: '43324',
  }),
} as unknown as AuthService;
