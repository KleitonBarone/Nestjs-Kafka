import { AuthService } from './auth.service';
import { GetUserRequest } from './get-user-request.dto';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    authService = new AuthService();
  });

  describe('getUser Method', () => {
    it('should return User', () => {
      const data = new GetUserRequest('123');
      const result = authService.getUser(data);

      expect(result).toEqual({
        userId: '123',
        stripeId: '43324',
      });
    });
  });
});
