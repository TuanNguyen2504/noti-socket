import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { CustomRequest } from '~/types/custom.type';
import validateAuthToken from '~/utils/validate-token';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<CustomRequest>();
    const token = req.headers.authorization;

    const { user, isValid, msg } = await validateAuthToken(token);

    if (!isValid) {
      logger.error('REST Authenticate: ', msg);
      throw new UnauthorizedException({ msg });
    }

    req.user = user;
    return true;
  }
}
