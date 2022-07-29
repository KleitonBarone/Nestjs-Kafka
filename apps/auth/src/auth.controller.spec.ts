import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { mockAuthService } from './auth.mock';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    authController = app.get<AuthController>(AuthController);
  });

  describe('get_user Message', () => {
    it('get_user returns user', () => {
      const data = {
        userId: '123',
      };
      const result = authController.getUser(data);

      expect(mockAuthService.getUser).toBeCalledWith(data);
      expect(result).toEqual(mockAuthService.getUser(data));
    });
  });
});
