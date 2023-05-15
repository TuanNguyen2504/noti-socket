import { Controller, Get, Request } from '@nestjs/common';
import { Logger } from '~/configs/logger';
import { CustomRequest } from '~/types/custom.type';

@Controller()
export class CheckHealthController {
  private readonly logger = new Logger('CHECK HEALTH');

  @Get('/check-health')
  checkHealth(): string {
    return 'OK';
  }

  // TEST: Remove it in production
  // @UseGuards(AuthGuard)
  @Get('/test')
  test(@Request() req: CustomRequest): string {
    return 'Test';
  }
}
